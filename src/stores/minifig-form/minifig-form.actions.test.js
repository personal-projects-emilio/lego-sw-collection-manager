import { types } from ".";
import * as actions from "./minifig-form.actions";
import minifigForm from "../../templates/minifigForm";
import axios from "../../axios";
import MockAdapter from "axios-mock-adapter";

describe("minifig-form/actions", () => {
  let dispatch, getState;
  let axiosPatch;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    dispatch = jest.fn();
    getState = jest.fn();
    axiosPatch = jest.spyOn(axios, "patch");
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });
  it("should return the setMinifigForm action", () => {
    expect(actions.setMinifigForm(minifigForm)).toEqual({
      type: types.SET_MINIFIGFORM,
      template: minifigForm
    });
  });
  it("should return the updateInput action", () => {
    expect(actions.updateInput("test", "field")).toEqual({
      type: types.UPDATE_INPUT,
      value: "test",
      inputKey: "field"
    });
  });
  it("should return the reset minifig form action", () => {
    expect(actions.resetMinifigForm()).toEqual({
      type: types.RESET_MINIFIGFORM,
    });
  });
  it("should set the minifig form for an add", () => {
    getState = jest.fn(() => ({
      minifigs: {
        tags: [{ name: "Jedi", amount: 10 }],
        characNames: [{ name: "Yoda", amount: 4 }],
        minifigs: {
          sw0001: {},
          sw0002: {}
        }
      }
    }));
    actions.setAddMinifigForm()(dispatch, getState);
    expect(getState).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should set the minifig form for an edit", async () => {
    getState = jest.fn(() => ({
      minifigs: {
        tags: [{ name: "Jedi", amount: 10 }],
        characNames: [{ name: "Yoda", amount: 4 }],
        minifigs: {
          sw0001: {},
          sw0002: {}
        }
      },
      minifigForm: {
        template: minifigForm
      }
    }));
    const minifig = {
      reference: 'sw0001',
      tags: [],
      characterName: '',
      name: ''
    }
    await actions.setEditMinifigForm(minifig)(dispatch, getState);
    expect(getState).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(4);
  });
  it("should update the minifigs in the DB on a submit", async () => {
    getState = jest.fn(() => ({
      minifigs: {
        minifigs: {
          sw0001: {},
          sw0002: {}
        }
      },
      minifigForm: {
        template: {
          reference: {
            value: 'sw0001a',
            validation: {
              reference: 'sw0001'
            }
          },
          name: {
            value: 'test'
          },
          characterName: {
            value: 'test'
          },
          tags: {
            value: []
          },
          possessed: {
            value: false
          }
        }
      },
      auth: {
        token: '123456789'
      }
    }));
    mock.onPatch("/minifigs.json").reply(200);
    await actions.submitMinifigForm()(dispatch, getState);
    expect(axiosPatch).toHaveBeenCalledWith('/minifigs.json', {
      sw0001a: {
        name: 'test',
        characterName: 'test',
        tags: [],
        possessed: false
      },
      sw0002: {}
    });
    expect(getState).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'ADD_OR_EDIT_A_MINIFIG',
      minifigs: {
        sw0001a: {
          name: 'test',
          characterName: 'test',
          tags: [],
          possessed: false
        },
        sw0002: {}
      }
    })
  });
  it("should update the minifigs in the store on a submit", () => {
    getState = jest.fn(() => ({
      minifigs: {
        minifigs: {
          sw0001: {},
          sw0002: {}
        }
      },
      minifigForm: {
        template: {
          reference: {
            value: 'sw0001a',
            validation: {
              reference: 'sw0001'
            }
          },
          name: {
            value: 'test'
          },
          characterName: {
            value: 'test'
          },
          tags: {
            value: []
          },
          possessed: {
            value: false
          }
        }
      },
      auth: {
        token: null
      }
    }));
    actions.submitMinifigForm()(dispatch, getState);
    expect(axiosPatch).not.toHaveBeenCalled();
    expect(getState).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'ADD_OR_EDIT_A_MINIFIG',
      minifigs: {
        sw0001a: {
          name: 'test',
          characterName: 'test',
          tags: [],
          possessed: false
        },
        sw0002: {}
      }
    })
  });
});

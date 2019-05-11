import { types } from ".";
import * as actions from "./actions";
import minifigForm from "../../templates/minifigForm";

describe("minifig-form/action", () => {
  let dispatch, getState;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
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

});

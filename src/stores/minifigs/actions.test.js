import { types } from ".";
import axios from "../../axios";
import MockAdapter from "axios-mock-adapter";
import * as actions from "./actions";

describe("actions/minifigs", () => {
  let dispatch;
  let mock;
  let axiosGet;
  let axiosPatch;
  let axiosDelete;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    dispatch = jest.fn();
    axiosGet = jest.spyOn(axios, "get");
    axiosPatch = jest.spyOn(axios, "patch");
    axiosDelete = jest.spyOn(axios, "delete");
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });

  it("should return a setMinifigs action", () => {
    expect(actions.setMinifigs({ test: "Minifigs" })).toEqual({
      type: types.SET.MINIFIGS,
      minifigs: { test: "Minifigs" }
    });
  });

  it("should return a setStatistics action", () => {
    expect(actions.setStatistics({ test: "Minifigs" })).toEqual({
      type: types.SET.STATISTICS,
      statistics: { test: "Minifigs" }
    });
  });

  it("should return a setTagsAndCharacterNames action", () => {
    expect(actions.setTagsAndCharacterNames({ test: "Minifigs" })).toEqual({
      type: types.SET.TAGS_AND_CHARACNAMES,
      data: { test: "Minifigs" }
    });
  });

  it("should fetch minifigs from DB", async () => {
    mock.onGet("/minifigs.json").reply(200, {
      ref: {}
    });
    await actions.fetchMinifigs()(dispatch);
    expect(axiosGet).toHaveBeenCalledWith('/minifigs.json');
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it("should toggle the possession of a minifig in the db", async () => {
    const getState = jest.fn(() => ({
      minifigs: {
        minifigs: {
          sw0001: {
            characterName: "Battle Droid",
            possessed: true
          }
        }
      },
      auth: {
        token: "123456789"
      }
    }));
    mock.onPatch("/minifigs/sw0001.json").reply(200);
    await actions.togglePossession("sw0001")(dispatch, getState);
    expect(axiosPatch).toHaveBeenCalledWith("/minifigs/sw0001.json", {
      characterName: "Battle Droid",
      possessed: false
    });
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: types.TOGGLE.POSSESSION,
      reference: "sw0001"
    });
  });
  it("should do nothing when failing to patch in the db", async () => {
    const getState = jest.fn(() => ({
      minifigs: {
        minifigs: {
          sw0001: {
            characterName: "Battle Droid",
            possessed: true
          }
        }
      },
      auth: {
        token: "123456789"
      }
    }));
    mock.onPatch("/minifigs/sw0001.json").reply(500);
    await actions.togglePossession("sw0001")(dispatch, getState);
    expect(axiosPatch).toHaveBeenCalledWith("/minifigs/sw0001.json", {
      characterName: "Battle Droid",
      possessed: false
    });
    await actions.togglePossession("sw0001")(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });
  it("should toggle the possession in the store when there is no auth", () => {
    const getState = jest.fn(() => ({
      minifigs: {
        minifigs: {
          sw0001: {
            characterName: "Battle Droid",
            possessed: true
          }
        }
      },
      auth: {
        token: null
      }
    }));
    actions.togglePossession("sw0001")(dispatch, getState);
    expect(axiosPatch).not.toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: types.TOGGLE.POSSESSION,
      reference: "sw0001"
    });
  });

  it("should delete a minifig in the db if authenticated", async () => {
    const getState = jest.fn(() => ({
      auth: {
        token: "123456789"
      }
    }));
    mock.onDelete("/minifigs/sw0001.json").reply(200);
    await actions.deleteMinifig("sw0001")(dispatch, getState);
    expect(axiosDelete).toHaveBeenCalledWith("/minifigs/sw0001.json");
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: types.DELETE.MINIFIG,
      reference: "sw0001"
    });
  });
  it("should delete a minifig in the store when there is no auth", () => {
    const getState = jest.fn(() => ({
      auth: {
        token: null
      }
    }));
    actions.deleteMinifig("sw0001")(dispatch, getState);
    expect(axiosDelete).not.toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: types.DELETE.MINIFIG,
      reference: "sw0001"
    });
  });
  it("should return a setPossesstionToAll action", () => {
    expect(actions.setPossessionToAll(true)).toEqual({
      type: types.SET.POSSESION_TO_ALL,
      possessed: true
    });
  });
  it("should return a addOrEditAMinifig action", () => {
    expect(actions.addOrEditAMinifig({ test: "test" })).toEqual({
      type: types.ADD_OR_EDIT_A_MINIFIG,
      minifigs: { test: "test" }
    });
  });
});

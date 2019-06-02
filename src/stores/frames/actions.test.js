import { types } from ".";
import axios from "../../axios";
import MockAdapter from "axios-mock-adapter";
import * as actions from "./actions";

describe("actions/frames", () => {
  let dispatch;
  let mock;
  let axiosGet;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    dispatch = jest.fn();
    axiosGet = jest.spyOn(axios, "get");
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });

  it("should return a setFrames action", () => {
    expect(actions.setFrames({ test: "Frames" })).toEqual({
      type: types.SET_FRAMES,
      frames: { test: "Frames" }
    });
  });

  it("should fetch frames from DB", async () => {
    mock.onGet("/frames.json").reply(200, {
      frames: {}
    });
    await actions.fetchFrames()(dispatch);
    expect(axiosGet).toHaveBeenCalledWith('/frames.json');
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

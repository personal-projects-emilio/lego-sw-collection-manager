import { types } from ".";
import axios from "../../axios";

export const setFrames = frames => ({
  type: types.SET_FRAMES,
  frames
});

export const fetchFrames = () => async dispatch => {
  try {
    const res = await axios.get("/frames.json");
    dispatch(setFrames(res.data));
  } catch (err) {}
};

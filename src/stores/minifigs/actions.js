import { types } from ".";
import dotProp from "dot-prop-immutable";
import axios from "../../axios";
import { getStatistics, getTagsAndCharacNames } from "../../services/minifigs";
import { checkTagAndCharacAfterDelete } from "../minifigs-filter";

export const setMinifigs = minifigs => ({
  type: types.SET.MINIFIGS,
  minifigs
});

export const setStatistics = statistics => ({
  type: types.SET.STATISTICS,
  statistics
});

export const setTagsAndCharacterNames = data => ({
  type: types.SET.TAGS_AND_CHARACNAMES,
  data
});

export const fetchMinifigs = () => async dispatch => {
  try {
    const res = await axios.get("/minifigs.json");
    dispatch(setMinifigs(res.data));
    dispatch(setStatistics(getStatistics(res.data)));
    dispatch(setTagsAndCharacterNames(getTagsAndCharacNames(res.data)));
  } catch (err) {}
};

export const togglePossession = reference => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  const action = {
    type: types.TOGGLE.POSSESSION,
    reference
  };
  if (token) {
    try {
      const minifig = state.minifigs.minifigs[reference];
      const updatedMinifig = dotProp.toggle(minifig, "possessed");
      await axios.patch(`/minifigs/${reference}.json`, updatedMinifig);
      dispatch(action);
    } catch (err) {}
  } else {
    dispatch(action);
  }
};

export const deleteMinifig = reference => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  const action = {
    type: types.DELETE.MINIFIG,
    reference
  }
  if (token) {
    try {
      await axios.delete(`/minifigs/${reference}.json`);
      dispatch(checkTagAndCharacAfterDelete(reference));
      dispatch(action);
    } catch (err) {}
  } else {
    dispatch(checkTagAndCharacAfterDelete(reference));
    dispatch(action);
  }
};

export const setPossessionToAll = possessed => ({
  type: types.SET.POSSESION_TO_ALL,
  possessed
});

export const addOrEditAMinifig = minifigs => ({
  type: types.ADD_OR_EDIT_A_MINIFIG,
  minifigs
});

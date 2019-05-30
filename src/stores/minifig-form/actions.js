import { types } from ".";
import minifigForm from "../../templates/minifigForm";
import dotProp from "dot-prop-immutable";
import isEqual from "lodash.isequal";
import { addOrEditAMinifig } from "../minifigs";
import axios from "../../axios";

export const setMinifigForm = template => ({
  type: types.SET_MINIFIGFORM,
  template
});

export const updateInput = (value, inputKey) => ({
  type: types.UPDATE_INPUT,
  value,
  inputKey
});

export const resetMinifigForm = () => ({
  type: types.RESET_MINIFIGFORM
});

export const setAddMinifigForm = () => (dispatch, getState) => {
  const state = getState();
  const { minifigs, tags, characNames } = state.minifigs;
  let updatedTemplate = dotProp.set(
    minifigForm,
    "reference.validation.isAReference",
    Object.keys(minifigs)
  );
  updatedTemplate = dotProp.set(
    updatedTemplate,
    "characterName.config.options",
    characNames.map(charac => ({ label: charac.name, value: charac.name }))
  );
  updatedTemplate = dotProp.set(
    updatedTemplate,
    "tags.config.options",
    tags.map(tag => ({ label: tag.name, value: tag.name }))
  );
  dispatch(setMinifigForm(updatedTemplate));
};

export const setEditMinifigForm = minifig => async (dispatch, getState) => {
  await dispatch(setAddMinifigForm());
  const template = getState().minifigForm.template;
  const updatedTemplate = dotProp.set(
    template,
    "reference.validation.reference",
    minifig.reference
  );
  await dispatch(setMinifigForm(updatedTemplate));
  let templatesValues = {};
  Object.keys(template).forEach(inputKey => {
    templatesValues[inputKey] = updatedTemplate[inputKey].value;
  });
  Object.keys(templatesValues).forEach(inputKey => {
    const oldValue = templatesValues[inputKey];
    const newValue = minifig[inputKey];
    !isEqual(oldValue, newValue) && dispatch(updateInput(newValue, inputKey));
  });
};

export const submitMinifigForm = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  const { template } = state.minifigForm;
  let { minifigs } = state.minifigs;
  const oldReference = template.reference.validation.reference;
  const reference = template.reference.value;
  const minifig = {
    name: template.name.value,
    characterName: template.characterName.value,
    tags: template.tags.value,
    possessed: template.possessed.value
  };
  minifigs = dotProp.merge(minifigs, reference, minifig);
  oldReference && oldReference !== reference && delete minifigs[oldReference];
  let updatedMinifigs = {};
  Object.keys(minifigs)
    .sort()
    .forEach(reference =>
        updatedMinifigs[reference] = minifigs[reference]
    );
  if (token) {
    try {
      await axios.patch("/minifigs.json", updatedMinifigs);
      dispatch(addOrEditAMinifig(updatedMinifigs));
      dispatch(resetMinifigForm());
    } catch (err) {}
  } else {
    dispatch(addOrEditAMinifig(updatedMinifigs));
    dispatch(resetMinifigForm());
  }
};

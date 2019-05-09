import dotProp from 'dot-prop-immutable';

export const updateInput = (state, action) => {
  const { value, inputKey } = action;
  const { template } = state;
  const updatedTemplate = dotProp.merge(template, inputKey, {
    value
  });
  return dotProp.set(state, 'template', updatedTemplate);
};


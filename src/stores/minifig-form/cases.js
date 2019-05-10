import dotProp from 'dot-prop-immutable';
import { checkValidity } from '../../services/form';

export const updateInput = (state, action) => {
  const { value, inputKey } = action;
  const { template } = state;
  const validity = checkValidity(value, template[inputKey].validation);
  const updatedTemplate = dotProp.merge(template, inputKey, {
    value,
    valid: validity.valid,
    touched: true,
    errorText: validity.errorText
  });
  return dotProp.set(state, 'template', updatedTemplate);
};


import { types } from '.';
import minifigForm from '../../templates/minifigForm';

export const setMinifigForm = () => ({
    type: types.SET_MINIFIGFORM,
    template: minifigForm,
});

export const updateInput = (value, inputKey) => ({
    type: types.UPDATE_INPUT,
    value,
    inputKey
});
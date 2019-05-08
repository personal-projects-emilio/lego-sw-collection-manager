import { types } from '.';
import minifigForm from '../../templates/minifigForm';

export const setMinifigForm = () => ({
    type: types.SET.MINIFIGFORM,
    minifigForm,
});
import { types } from '.';
import axios from '../../axios';

export const setMinifigs = minifigs => ({
    type: types.SET_MINIFIGS,
    minifigs,
});

export const fetchMinifigs = () => dispatch => {
    axios.get(`/minifigs.json`)
        .then(res => {
            dispatch(setMinifigs(res.data))
        })
}

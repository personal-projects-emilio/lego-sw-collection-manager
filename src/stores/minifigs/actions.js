import { types } from '.';
import axios from '../../axios';
import { getStatistics, getTagsAndCharacNames } from '../../services/minifigs';
import { checkTagAndCharacAfterDelete } from '../minifigs-filter';

export const setMinifigs = minifigs => ({
    type: types.SET.MINIFIGS,
    minifigs,
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
        const res = await axios.get('/minifigs.json');
        dispatch(setMinifigs(res.data))
        dispatch(setStatistics(getStatistics(res.data)))
        dispatch(setTagsAndCharacterNames(getTagsAndCharacNames(res.data)));
    } catch (err) {
    }
};

export const togglePossession = (reference) => ({
    type: types.TOGGLE.POSSESSION,
    reference
});

export const deleteMinifig = reference => dispatch => {
    dispatch(checkTagAndCharacAfterDelete(reference));
    dispatch({
        type: types.DELETE.MINIFIG,
        reference
    })
};

export const setPossessionToAll = possessed => ({
    type: types.SET.POSSESION_TO_ALL,
    possessed
});

export const addOrEditAMinifig = minifigs => ({
    type: types.ADD_OR_EDIT_A_MINIFIG,
    minifigs
});

import { types } from '.';
import axios from '../../axios';
import { getStatistics, getTagsAndCharacNames } from '../../shared/utility';
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

export const fetchMinifigs = () => dispatch => {
    axios.get(`/minifigs.json`)
        .then(res => {
            dispatch(setMinifigs(res.data))
            dispatch(setStatistics(getStatistics(res.data)))
            dispatch(setTagsAndCharacterNames(getTagsAndCharacNames(res.data)));
        })
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

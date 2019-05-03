import { types, cases } from ".";

const initialState = {
    minifigs: null,
    totalNumber: null,
    numberOwned: null,
    percentageOwned: 0,
    tags: null,
    characNames: null
};

const counterReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.SET.MINIFIGS : 
            return {...state, minifigs: action.minifigs}
        case types.SET.STATISTICS:
            return {
                ...state,
                totalNumber: action.statistics.totalNumber,
                numberOwned: action.statistics.numberOwned,
                percentageOwned: action.statistics.percentageOwned
            };
        case types.SET.TAGS_AND_CHARACNAMES:
            return {...state, tags: action.data.tags, characNames: action.data.characNames}
        case types.TOGGLE.POSSESSION: 
            return cases.togglePossession(state, action);
        case types.DELETE.MINIFIG:
            return cases.deleteMinifig(state, action);
        default:
            return state;
    }
};

export default counterReducer;
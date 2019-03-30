import { types } from ".";

const initialState = {
    options: {
        show: ['all', 'owned', 'missing'],
        nbPerPages: ['25', '50', '100', '200']
    },
    activePage: 1,
    numberPerPage: 100,
    show: 'all',
    tagSelected: null,
    characNameSelected: null
};

const counterReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.SET.ACTIVE_PAGE : {
            return {...state, activePage: action.activePage}
        }
        case types.SET.NUMBER_PER_PAGE : {
            return {...state, numberPerPage: action.numberPerPage}
        }
        case types.SET.SHOW : {
            return {...state, show: action.show}
        }
        case types.SET.TAG_SELECTED : {
            return {...state, tagSelected: action.tagSelected}
        }
        case types.SET.CHARACNAME_SELECTED : {
            return {...state, characNameSelected: action.characNameSelected}
        }
        default:
            return state;
    }
};

export default counterReducer;
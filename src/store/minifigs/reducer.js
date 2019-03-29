import { types } from ".";

const initialState = {
    minifigs: null,
};

const counterReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.SET_MINIFIGS : {
            return {...state, minifigs: action.minifigs}
        }
        default:
            return state;
    }
};

export default counterReducer;
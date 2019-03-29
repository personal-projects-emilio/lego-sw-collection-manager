import reducer from '.';
import { types } from '.';

describe('reducer/minifigs', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
           minifigs: null
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should increment the counter', () => {
        const action = {
            type: types.SET_MINIFIGS,
            minifigs: {test: 'Test'}
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            minifigs: {test: 'Test'}
        });
    });
});

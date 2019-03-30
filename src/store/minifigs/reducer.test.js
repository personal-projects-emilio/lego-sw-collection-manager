import reducer from '.';
import { types } from '.';

describe('reducer/minifigs', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            minifigs: null,
            totalNumber: null,
            numberOwned: null,
            percentageOwned: 0,
            tags: null,
            characNames: null
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set the minifigs', () => {
        const action = {
            type: types.SET.MINIFIGS,
            minifigs: {test: 'Test'}
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            minifigs: {test: 'Test'}
        });
    });

    it('should set the statistics', () => {
        const action = {
            type: types.SET.STATISTICS,
            statistics: {
                totalNumber: 2,
                numberOwned: 2,
                percentageOwned: 100
            }
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            totalNumber: 2,
            numberOwned: 2,
            percentageOwned: 100
        });
    });
    it('should set the tags and characNames', () => {
        const action = {
            type: types.SET.TAGS_AND_CHARACNAMES,
            data: {
                tags: ['tag1', 'tag2'],
                characNames: ['charac', 'test']
            }
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            tags: ['tag1', 'tag2'],
            characNames: ['charac', 'test']
        });
    });
});

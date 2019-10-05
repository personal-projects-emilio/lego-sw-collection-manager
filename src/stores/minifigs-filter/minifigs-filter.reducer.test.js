import reducer from '.';
import { types } from '.';

describe('minifigsFilterReducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
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
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set the activePage', () => {
        const action = {
            type: types.SET.ACTIVE_PAGE,
            activePage: 2
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            activePage: 2
        });
    });

    it('should set the numberPerPage', () => {
        const action = {
            type: types.SET.NUMBER_PER_PAGE,
            numberPerPage: 200
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            numberPerPage: 200
        });
    });

    it('should set the show property', () => {
        const action = {
            type: types.SET.SHOW,
            show: 'missing'
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            show: 'missing'
        });
    });

    it('should set the tagSelected', () => {
        initialState.characNameSelected = 'Boba Fett';
        const action = {
            type: types.SET.TAG_SELECTED,
            tagSelected: 'Jedi'
        };
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            characNameSelected: null,
            tagSelected: 'Jedi'
        });
    });

    it('should reset the tag selected', () => {
        const action = {
            type: types.RESET.TAG_SELECTED,
        };
        initialState.tagSelected = 'Bounty Hunter';
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            tagSelected: null
        });
    });

    it('should set the characNameSelected', () => {
        const action = {
            type: types.SET.CHARACNAME_SELECTED,
            characNameSelected: 'Darth Maul'
        };
        initialState.tagSelected = 'Sith';
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            tagSelected: null,
            characNameSelected: 'Darth Maul'
        });
    });

    it('should reset the characNameSelected', () => {
        const action = {
            type: types.RESET.CHARACNAME_SELECTED,
        };
        initialState.characNameSelected = 'Darth Vader'
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            characNameSelected: null
        });
    });
});

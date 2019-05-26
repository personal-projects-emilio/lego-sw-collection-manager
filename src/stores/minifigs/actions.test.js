import { types } from '.';
import axios from '../../axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './actions';

describe('action/minifigs', () => {
    let dispatch;
    let mock;
    beforeEach(() => {
        mock = new MockAdapter(axios);
        dispatch = jest.fn();
    })
    afterEach(() => {
        mock.restore();
    })
    it('should return a setMinifigs action', () => {
        expect(actions.setMinifigs({test:'Minifigs'})).toEqual({
            type: types.SET.MINIFIGS,
            minifigs: {test:'Minifigs'}
        });
    });
    it('should return a setStatistics action', () => {
        expect(actions.setStatistics({test:'Minifigs'})).toEqual({
            type: types.SET.STATISTICS,
            statistics: {test:'Minifigs'}
        });
    });
    it('should return a setTagsAndCharacterNames action', () => {
        expect(actions.setTagsAndCharacterNames({test:'Minifigs'})).toEqual({
            type: types.SET.TAGS_AND_CHARACNAMES,
            data: {test:'Minifigs'}
        });
    });
    it('should fetch minifigs from DB', async () => {
        const dispatch = jest.fn();
        mock.onGet('/minifigs.json').reply(200, {
            ref: {}
        })
        await actions.fetchMinifigs()(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(3);
    });
    it('should return a togglePossession action', () => {
        expect(actions.togglePossession('sw0001a')).toEqual({
            type: types.TOGGLE.POSSESSION,
            reference: 'sw0001a'
        });
    });
    it('should return a deleteMinifig action', () => {
        actions.deleteMinifig('sw0001a')(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: types.DELETE.MINIFIG,
            reference: 'sw0001a'
        });
    });
    it('should return a setPossesstionToAll action', () => {
        expect(actions.setPossessionToAll(true)).toEqual({
            type: types.SET.POSSESION_TO_ALL,
            possessed: true
        });
    });
    it('should return a addOrEditAMinifig action', () => {
        expect(actions.addOrEditAMinifig({test: 'test'})).toEqual({
            type: types.ADD_OR_EDIT_A_MINIFIG,
            minifigs: {test: 'test'}
        });
    });
});

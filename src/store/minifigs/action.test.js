import { types } from '.';
import axios from '../../axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './action';

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
    it('should fetch minifigs from DB', () => {
        const dispatch = jest.fn();
        mock.onGet('/minifigs.json').reply(200, {
            data: {
                test: 'Fetch Minifigs from DB'
            }
        })
        actions.fetchMinifigs()(dispatch)
    });
    it('should return a tooglePossession action', () => {
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
});

import { setMinifigs, fetchMinifigs, types } from '.';
import axios from '../../axios';
import MockAdapter from 'axios-mock-adapter';
import { setStatistics, setTagsAndCharacterNames } from './action';

describe('action/minifigs', () => {
    let mock;
    beforeEach(() => {
        mock = new MockAdapter(axios);
    })
    afterEach(() => {
        mock.restore();
    })
    it('should return a setMinifigs action', () => {
        expect(setMinifigs({test:'Minifigs'})).toEqual({
            type: types.SET.MINIFIGS,
            minifigs: {test:'Minifigs'}
        });
    });
    it('should return a setStatistics action', () => {
        expect(setStatistics({test:'Minifigs'})).toEqual({
            type: types.SET.STATISTICS,
            statistics: {test:'Minifigs'}
        });
    });
    it('should return a setTagsAndCharacterNames action', () => {
        expect(setTagsAndCharacterNames({test:'Minifigs'})).toEqual({
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
        fetchMinifigs()(dispatch)
    });
});

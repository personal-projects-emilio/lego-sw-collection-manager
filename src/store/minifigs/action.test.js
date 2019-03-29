import { setMinifigs, fetchMinifigs, types } from '.';
import axios from '../../axios';
import MockAdapter from 'axios-mock-adapter';

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
            type: types.SET_MINIFIGS,
            minifigs: {test:'Minifigs'}
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

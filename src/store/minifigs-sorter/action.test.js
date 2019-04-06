import { types } from '.';
import * as actions from './action';

describe('action/minifigs-sorter', () => {
    it('should return the setActivePage action', () => {
        expect(actions.setActivePage(2)).toEqual({
            type: types.SET.ACTIVE_PAGE,
            activePage: 2
        });
    });
    it('should return the setNumberPerPage action', () => {
        expect(actions.setNumberPerPage(200)).toEqual({
            type: types.SET.NUMBER_PER_PAGE,
            numberPerPage: 200
        });
    });
    it('should return the setShow action', () => {
        expect(actions.setShow('missing')).toEqual({
            type: types.SET.SHOW,
            show: 'missing'
        });
    });
    it('should return the setTagSelected action', () => {
        expect(actions.setTagSelected('Jedi')).toEqual({
            type: types.SET.TAG_SELECTED,
            tagSelected: 'Jedi'
        });
    });
    it('should return the setCharacNameSelected action', () => {
        expect(actions.setCharacNameSelected('Battle Droid')).toEqual({
            type: types.SET.CHARACNAME_SELECTED,
            characNameSelected: 'Battle Droid'
        });
    });
    it('should return the resetTagSelected action', () => {
        expect(actions.resetTagSelected()).toEqual({
            type: types.RESET.TAG_SELECTED,
        });
    });
    it('should return the resetCharcNameSelected action', () => {
        expect(actions.resetCharcNameSelected()).toEqual({
            type: types.RESET.CHARACNAME_SELECTED,
        });
    });
});

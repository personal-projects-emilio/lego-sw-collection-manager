import { types } from '.';
import { setActivePage, setNumberPerPage, setShow, setTagSelected, setCharacNameSelected } from '.';

describe('action/minifigs-sorter', () => {
    it('should return the setActivePage action', () => {
        expect(setActivePage(2)).toEqual({
            type: types.SET.ACTIVE_PAGE,
            activePage: 2
        });
    });
    it('should return the setNumberPerPage action', () => {
        expect(setNumberPerPage(200)).toEqual({
            type: types.SET.NUMBER_PER_PAGE,
            numberPerPage: 200
        });
    });
    it('should return the setShow action', () => {
        expect(setShow('missing')).toEqual({
            type: types.SET.SHOW,
            show: 'missing'
        });
    });
    it('should return the setTagSelected action', () => {
        expect(setTagSelected('Jedi')).toEqual({
            type: types.SET.TAG_SELECTED,
            tagSelected: 'Jedi'
        });
    });
    it('should return the setCharacNameSelected action', () => {
        expect(setCharacNameSelected('Battle Droid')).toEqual({
            type: types.SET.CHARACNAME_SELECTED,
            characName: 'Battle Droid'
        });
    });
});

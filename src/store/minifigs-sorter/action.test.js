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
    it('should set the character name', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?tag=CIS'
                }
            }
        }))
        actions.setCharacNameSelected('Battle Droid')(dispatch, getState);
        expect(getState).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
    it('should reset the character name', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?characterName=Han+Solo'
                }
            }
        }))
        actions.resetCharcNameSelected()(dispatch, getState);
        expect(getState).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
    it('should set the tag', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?characterName=Boba+Fett&show=owned'
                }
            }
        }))
        actions.setTagSelected('Jedi')(dispatch, getState);
        expect(getState).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
    it('should reset the tag selected', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?tag=CIS&show=missing'
                }
            }
        }))
        actions.resetTagSelected()(dispatch, getState)
        expect(getState).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
    it('should manage the search parameters for characterName and show', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?tag=CIS&characterName=Han+Solo&show=missing'
                }
            },
            minifigsSorter: {
                options: {
                    show: ['all', 'missing', 'owned']
                }
            }
        }))
        actions.manageSearchParams()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledTimes(3);
    });
    it('should manage the search parameters for tag', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            router: {
                location: {
                    search: '?tag=CIS&tag=shouldNotExist'
                }
            },
            minifigsSorter: {
                options: {
                    show: ['all', 'missing', 'owned']
                }
            }
        }))
        actions.manageSearchParams()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});

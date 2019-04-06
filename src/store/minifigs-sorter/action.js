import { types } from '.';

export const setActivePage = activePage => ({
    type: types.SET.ACTIVE_PAGE,
    activePage
});

export const setNumberPerPage = numberPerPage => ({
    type: types.SET.NUMBER_PER_PAGE,
    numberPerPage
});

export const setShow = show => ({
    type: types.SET.SHOW,
    show
});

export const setTagSelected = tagSelected => ({
    type: types.SET.TAG_SELECTED,
    tagSelected
});

export const setCharacNameSelected = characNameSelected => ({
    type: types.SET.CHARACNAME_SELECTED,
    characNameSelected
});

export const resetTagSelected = () => ({
    type: types.RESET.TAG_SELECTED,
});

export const resetCharcNameSelected = () => ({
    type: types.RESET.CHARACNAME_SELECTED,
});
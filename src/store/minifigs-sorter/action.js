import { types } from '.';

export const setActivePage = activePage => ({
    type: types.SET.ACTIVE_PAGE,
    activePage,
});

export const setNumberPerPage = numberPerPage => ({
    type: types.SET.NUMBER_PER_PAGE,
    numberPerPage,
});

export const setShow = show => ({
    type: types.SET.SHOW,
    show,
});

export const setTagSelected = tagSelected => ({
    type: types.SET.TAG_SELECTED,
    tagSelected,
});

export const setCharacNameSelected = characName => ({
    type: types.SET.CHARACNAME_SELECTED,
    characName,
});
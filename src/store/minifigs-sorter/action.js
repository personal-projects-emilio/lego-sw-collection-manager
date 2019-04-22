import { types } from '.';
import { push } from 'connected-react-router';

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

export const setCharacNameSelected = characNameSelected => (dispatch, getState) => {
    const search = getState().router.location.search;
    const params = new URLSearchParams(search);

    // We set the characterName
    params.set('characterName', characNameSelected);

    // We delete the tag parameter if it exists
    params.has('tag') && params.delete('tag');

    // We obtain the new query search and push it
    const newSearch = params.toString() && `?${params.toString()}`;
    search !== newSearch && dispatch(push({search: newSearch}));

    dispatch({
        type: types.SET.CHARACNAME_SELECTED,
        characNameSelected
    });
};

export const resetCharcNameSelected = () => (dispatch, getState) => {
    const search = getState().router.location.search;
    const params = new URLSearchParams(search);
    params.delete('characterName');
    dispatch(push({search: `?${params.toString()}`}));
    dispatch({type: types.RESET.CHARACNAME_SELECTED})
};

export const setTagSelected = tagSelected => (dispatch, getState) => {
    const search = getState().router.location.search;
    const params = new URLSearchParams(search);

    // We set the tag
    params.set('tag', tagSelected);

    // We delete the characterName parameter if it exists
    params.has('characterName') && params.delete('characterName');

    // We obtain the new query search and push it
    const newSearch = params.toString() && `?${params.toString()}`
    search !== newSearch && dispatch(push({search: newSearch}));

    dispatch({
        type: types.SET.TAG_SELECTED,
        tagSelected
    });
};

export const resetTagSelected = () => (dispatch, getState) => {
    const search = getState().router.location.search;
    const params = new URLSearchParams(search);
    params.delete('tag');
    const newSearch = params.toString() && `?${params.toString()}`
    dispatch(push({search: newSearch}));
    dispatch({type: types.RESET.TAG_SELECTED})
};

export const manageSearchParams = () => (dispatch, getState) => {
    const state = getState();
    const search = state.router.location.search;
    const showOptions = state.minifigsSorter.options.show;
    const selectedShow = state.minifigsSorter.show;
    const params = new URLSearchParams(search);
    const newParams = new URLSearchParams();
    // We create a new parameters to get rid of any untreated params or double

    // If we have a character name we set it in the new params and in the store
    const characName = params.get('characterName');
    characName && newParams.set('characterName', characName);
    characName && dispatch(setCharacNameSelected(characName));

    // And we set show if it is one of the store options and not the default one ('all')
    const show = params.get('show');
    show && showOptions.includes(show) && show !== selectedShow && dispatch(setShow(show));
    show && showOptions.includes(show) && show !== selectedShow && newParams.set('show', show);

    // The same for the tag if there is no character name
    const tag = params.get('tag');
    tag && !characName && newParams.set('tag', tag);
    tag && !characName && dispatch(setTagSelected(tag));

    // We obtain the new search and push it if it's different
    const newSearch = newParams.toString() && `?${newParams.toString()}`;
    search !== newSearch && dispatch(push({search: newSearch}));
};
import { types } from ".";
import { push } from "connected-react-router";
import { getTagsAndCharacNames } from "../../services/minifigs";

export const setActivePage = activePage => ({
  type: types.SET.ACTIVE_PAGE,
  activePage
});

export const setNumberPerPage = numberPerPage => ({
  type: types.SET.NUMBER_PER_PAGE,
  numberPerPage
});

export const setShow = show => (dispatch, getState) => {
  const { search } = getState().router.location;
  const params = new URLSearchParams(search);

  // We set show or delete it in function of its value
  show !== "all" && params.set("show", show);
  show === "all" && params.has("show") && params.delete("show");

  // We obtain the new query search and push it
  const newSearch = params.toString() && `?${params.toString()}`;
  search !== newSearch && dispatch(push({ search: newSearch }));

  dispatch({
    type: types.SET.SHOW,
    show
  });
};

export const checkActivePage = (type, elSelected) => (dispatch, getState) => {
  const state = getState();
  const { minifigs } = state;
  const { activePage, numberPerPage } = state.minifigsFilter;
  const amount =
    minifigs[type] && minifigs[type].find(el => el.name === elSelected).amount;
  amount &&
    amount < activePage * numberPerPage &&
    dispatch(setActivePage(Math.ceil(amount / numberPerPage)));
};

export const setCharacNameSelected = characNameSelected => (
  dispatch,
  getState
) => {
  const { search } = getState().router.location;
  const params = new URLSearchParams(search);
  if (characNameSelected) {
    // We set the characterName
    params.set("characterName", characNameSelected);
    // We delete the tag parameter if it exists
    params.has("tag") && params.delete("tag");
    // We obtain the new query search and push it
    dispatch({
      type: types.SET.CHARACNAME_SELECTED,
      characNameSelected
    });
    dispatch(checkActivePage("characNames", characNameSelected));
  } else {
    params.delete("characterName");
    dispatch({ type: types.RESET.CHARACNAME_SELECTED });
  }
  const newSearch = params.toString() && `?${params.toString()}`;
  search !== newSearch && dispatch(push({ search: newSearch }));
};

export const setTagSelected = tagSelected => (dispatch, getState) => {
  const { search } = getState().router.location;
  const params = new URLSearchParams(search);
  if (tagSelected) {
    // We set the tag
    params.set("tag", tagSelected);
    // We delete the characterName parameter if it exists
    params.has("characterName") && params.delete("characterName");
    // We obtain the new query search and push it
    dispatch({
      type: types.SET.TAG_SELECTED,
      tagSelected
    });
    dispatch(checkActivePage("tags", tagSelected));
  } else {
    params.delete("tag");
    dispatch({ type: types.RESET.TAG_SELECTED });
  }
  const newSearch = params.toString() && `?${params.toString()}`;
  search !== newSearch && dispatch(push({ search: newSearch }));
};

export const manageSearchParams = () => (dispatch, getState) => {
  const state = getState();
  const { search } = state.router.location;
  const showOptions = state.minifigsFilter.options.show;
  const selectedShow = state.minifigsFilter.show;
  const params = new URLSearchParams(search);
  const newParams = new URLSearchParams();
  // We create a new parameters to get rid of any untreated params or double

  // If we have a character name we set it in the new params and in the store
  const characName = params.get("characterName");
  characName && newParams.set("characterName", characName);
  characName && dispatch(setCharacNameSelected(characName));

  // And we set show if it is one of the store options and not the default one ('all')
  const show = params.get("show");
  show &&
    showOptions.includes(show) &&
    show !== selectedShow &&
    dispatch(setShow(show));
  show &&
    showOptions.includes(show) &&
    show !== selectedShow &&
    newParams.set("show", show);

  // The same for the tag if there is no character name
  const tag = params.get("tag");
  tag && !characName && newParams.set("tag", tag);
  tag && !characName && dispatch(setTagSelected(tag));

  // We obtain the new search and push it if it's different
  const newSearch = newParams.toString() && `?${newParams.toString()}`;
  search !== newSearch && dispatch(push({ search: newSearch }));
};

export const resetFilters = () => (dispatch, getState) => {
  const { minifigsFilter } = getState();
  minifigsFilter.show !== "all" && dispatch(setShow("all"));
  minifigsFilter.tagSelected && dispatch(setTagSelected());
  minifigsFilter.characNameSelected && dispatch(setCharacNameSelected());
};

export const checkTagAndCharacAfterDelete = () => (dispatch, getState) => {
  const state = getState();
  const { minifigsFilter } = state;
  const { tagSelected, characNameSelected } = minifigsFilter;
  const { minifigs } = state.minifigs;
  const data = getTagsAndCharacNames(minifigs);
  tagSelected &&
    data.tags.map(tag => tag.name).includes(tagSelected) &&
    dispatch(setTagSelected());
  characNameSelected &&
    data.characNames
      .map(characName => characName.name)
      .includes(characNameSelected) &&
    dispatch(setCharacNameSelected());
};

import minifigsFilterReducer from './minifigs-filter.reducer'
export {
  setActivePage,
  setNumberPerPage,
  setShow,
  setTagSelected,
  setCharacNameSelected,
  resetTagSelected,
  resetCharcNameSelected,
  manageSearchParams,
  resetFilters,
  checkTagAndCharacAfterDelete
} from './minifigs-filter.actions';
export { types } from './minifigs-filter.types';
export default minifigsFilterReducer;
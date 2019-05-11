import minifigsFilterReducer from './reducer'
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
} from './actions';
export { types } from './types';
export default minifigsFilterReducer;
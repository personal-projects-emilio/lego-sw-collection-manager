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
  resetFilters
} from './action';
export { types } from './types';
export default minifigsFilterReducer;
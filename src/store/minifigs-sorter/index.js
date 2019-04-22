import minifigsSorterReducer from './reducer'
export {
  setActivePage,
  setNumberPerPage,
  setShow,
  setTagSelected,
  setCharacNameSelected,
  resetTagSelected,
  resetCharcNameSelected,
  manageSearchParams
} from './action';
export { types } from './types';
export default minifigsSorterReducer;
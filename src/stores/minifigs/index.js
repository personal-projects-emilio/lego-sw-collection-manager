import minifigsReducer from './minifigs.reducer';
import * as cases from './minifigs.cases';
export { cases };
export {
  setMinifigs,
  fetchMinifigs,
  setStatistics,
  setTagsAndCharacterNames,
  togglePossession,
  deleteMinifig,
  setPossessionToAll,
  addOrEditAMinifig
} from './minifigs.actions';
export { types } from './minifigs.types';
export default minifigsReducer;
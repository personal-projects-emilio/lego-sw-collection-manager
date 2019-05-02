import minifigsReducer from './reducer';
import * as cases from './cases';
export { cases };
export {
  setMinifigs,
  fetchMinifigs,
  setStatistics,
  setTagsAndCharacterNames,
  togglePossession
} from './action';
export { types } from './types';
export default minifigsReducer;
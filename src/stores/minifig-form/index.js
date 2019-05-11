import minifigFormReducer from './reducer';
import * as cases from './cases';
export { cases };
export {
  setMinifigForm,
  updateInput,
  setAddMinifigForm,
  setEditMinifigForm,
  resetMinifigForm
} from './actions';
export { types } from './types';
export default minifigFormReducer;
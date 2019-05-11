import { types } from ".";
import * as actions from "./actions";
import minifigForm from '../../templates/minifigForm';

describe("minifig-form/action", () => {
  it("should return the setMinifigForm action", () => {
    expect(actions.setMinifigForm()).toEqual({
      type: types.SET_MINIFIGFORM,
      template: minifigForm 
    });
  });
  it("should return the updateInput action", () => {
    expect(actions.updateInput('test', 'field')).toEqual({
      type: types.UPDATE_INPUT,
      value: 'test',
      inputKey: 'field'
    });
  });
});

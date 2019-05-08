import { types } from ".";
import * as actions from "./action";
import minifigForm from '../../templates/minifigForm';

describe("minifig-form/action", () => {
  it("should return the setMinifigForm action", () => {
    expect(actions.setMinifigForm()).toEqual({
      type: types.SET.MINIFIGFORM,
      minifigForm 
    });
  });
});

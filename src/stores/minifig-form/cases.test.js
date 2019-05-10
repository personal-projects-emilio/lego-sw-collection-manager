import { cases } from '.';

describe('cases/minifig-form', () => {
  describe('updateInput', () => {
    it('should update an input', () => {
      const state = {
        template: {
          key1: {
            value: '',
            valid: false,
            touched: false,
            errorText: null,
            validation: {
              required: true
            }
          }
        }
      };
      const action = {
        value: 'test',
        inputKey: 'key1'
      };
      expect(cases.updateInput(state, action)).toEqual({
        template: {
          key1: {
            ...state.template.key1,
            value: 'test',
            valid: true,
            touched: true
          }
        }
      });
    });
  });
});

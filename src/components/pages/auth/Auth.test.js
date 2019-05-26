import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';
import { Paper, Grid, Button } from "@material-ui/core";
import Inputs from "../../commons/inputs";

describe('<Auth />', () => {
  it('should render the auh page', () => {
    const props = {
      classes: {},
      template: {
        email: {
          label: 'Email',
          valid: false,
          touched: false
        },
        password: {
          label: 'Password',
          valid: false,
          touched: false
        }
      },
      updateInput: jest.fn(),
      authenticate: jest.fn(),
      formIsValid: false
    }
    const wrapper = shallow(<Auth {...props} />);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Inputs)).toHaveLength(2);
  });
});
import React from 'react';
import { Switch, FormControlLabel } from "@material-ui/core";
import CustomSwitch from './Switch';
import { mount } from 'enzyme';

describe('<Switch />', () => {
  let props;
  beforeEach(() => {
    props = {
      value: false,
      label: 'Switch test',
      inputChange: jest.fn(),
      inputKey: 'test'
    }
  });
  it('should render a custom switch', () => {
    const wrapper = mount(<CustomSwitch {...props} />);
    expect(wrapper.find(FormControlLabel)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    wrapper.find('input').first().simulate('change', {}, true);
  });
});
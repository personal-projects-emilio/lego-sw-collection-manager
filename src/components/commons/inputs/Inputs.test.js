import React from 'react';
import Inputs from './Inputs';
import { Grid } from '@material-ui/core';
import Switch from './switch';
import TextField from './textfield';
import { shallow, mount } from 'enzyme';

describe('<Inputs />', () => {
  let props;
  beforeEach(() => {
    props = {
      updateInput: jest.fn(),
      value: '',
      label: 'Test inputs',
      valid: false,
      touched: false,
      inputKey: 'key1'
    };
  });
  it('should return the not supported span', () => {
    const wrapper = shallow(<Inputs {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(1);
  });
  it('should update a field', () => {
    props.type = 'textfield';
    const wrapper = mount(<Inputs {...props} />);
    wrapper.find('input').simulate('change', {target: {value: 'test'}});
    expect(props.updateInput).toHaveBeenCalledWith('test', 'key1');
  });
  it('should retun a textfield', () => {
    props.type = 'textfield';
    const wrapper = shallow(<Inputs {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
  });
  it('should retun a switch', () => {
    props.type = 'switch';
    props.value = false;
    const wrapper = shallow(<Inputs {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
});
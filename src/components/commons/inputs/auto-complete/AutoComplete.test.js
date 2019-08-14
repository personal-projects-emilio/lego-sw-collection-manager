import React from 'react';
import CreatableSelect from 'react-select/creatable'
import AutoComplete from './AutoComplete';
import { shallow, mount } from 'enzyme';
import { Chip } from '@material-ui/core';

describe('<AutoComplete />', () => {
  let props;
  beforeEach(() => {
    props = {
      value: 'Darth Vader',
      label: 'Autocomplete test',
      inputChange: jest.fn(),
      inputKey: 'test',
      placeholder: 'Test placeholder',
      errorText: 'Test error text',
      valid: false,
      touched: true,
      config: {},
      classes: {}
    }
  });
  it('should render a custom autocomplete', () => {
    const wrapper = mount(<AutoComplete {...props} />);
    expect(wrapper.find(CreatableSelect)).toHaveLength(1);
  });
  it('should render a custom  multi choice autocomplete', () => {
    props.value = ['Empire', 'Sith'];
    props.config.multi = true;
    const wrapper = mount(<AutoComplete {...props} />);
    expect(wrapper.find(CreatableSelect)).toHaveLength(1);
    expect(wrapper.find(Chip)).toHaveLength(2);
  });
  it('should manage the changes for simple autocomplete', () => {
    const wrapper = shallow(<AutoComplete {...props} />);
    expect(wrapper.find(CreatableSelect)).toHaveLength(1);
    wrapper.find(CreatableSelect).simulate('change', {label: 'Yoda Sama', value: 'Yoda'});
    expect(props.inputChange).toHaveBeenCalledWith('Yoda');
    wrapper.find(CreatableSelect).simulate('change', null);
    expect(props.inputChange).toHaveBeenCalledWith('');
  });
  it('should manage the changes for multi autocomplete', () => {
    props.config.multi = true;
    const wrapper = shallow(<AutoComplete {...props} />);
    expect(wrapper.find(CreatableSelect)).toHaveLength(1);
    wrapper.find(CreatableSelect).simulate('change', [
      {label: 'Yoda San', value: 'Yoda'},
      {label: 'Jedi Kun', value: 'Jedi'}
    ]);
    expect(props.inputChange).toHaveBeenCalledWith(['Yoda', 'Jedi']);
  });
});
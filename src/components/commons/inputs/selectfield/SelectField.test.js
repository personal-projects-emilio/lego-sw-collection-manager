import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import SelectField from './Selectfield';
import { shallow } from 'enzyme';

describe('<Selectfield />', () => {
  let props;
  beforeEach(() => {
    props = {
      classes: {
        Selectfield: 'selectfied'
      },
      options: [
        {
          displayed: 'Test 1',
          value: 'test1'
        },
        {
          displayed: 'Test 2',
          value: 'test2'
        }
      ],
      setValue: jest.fn(),
      resetValue: jest.fn(),
      value: 'test1',
      label: 'This is a test'
    }
  });
  it('should render a selectfield', () => {
    const wrapper = shallow(<SelectField {...props} />);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(2);
    wrapper.find(TextField).first().simulate('change', {target: {value: 'test2'}});
    expect(props.setValue).toHaveBeenCalledWith('test2');
  });
  it('should manage null value', () => {
    props.value = null;
    shallow(<SelectField {...props} />);
  });
});
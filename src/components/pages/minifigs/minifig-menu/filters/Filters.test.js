import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import SelectField from '../../../../commons/inputs/selectfield';

describe('<Filters />', () => {
  let props;
  beforeEach(() => {
    props = {
      showOptions: ['all', 'owned', 'missing'],
      show: 'all',
      setShow: jest.fn(),
      tagSelected: null,
      tags: [{name: 'test', amount: 2}],
      setTag: jest.fn(),
      resetTag: jest.fn(),
      characNameSelected: null,
      characNames: [{name: 'test', amount: 2}],
      setCharacName: jest.fn(),
      resetCharacName: jest.fn(),
    }
  });
  it('should render the Filters section', () => {
    const wrapper = shallow(<Filters {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(3);
    expect(wrapper.find(SelectField)).toHaveLength(1);
    wrapper.find(TextField).first().simulate('change', {target: {value: 'owned'}});
    expect(props.setShow).toHaveBeenCalledWith('owned');
  });
});
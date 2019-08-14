import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';
import Inputs from "../../../../commons/inputs";
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
    expect(wrapper.find(Inputs)).toHaveLength(1);
    expect(wrapper.find(SelectField)).toHaveLength(2);
  });
});
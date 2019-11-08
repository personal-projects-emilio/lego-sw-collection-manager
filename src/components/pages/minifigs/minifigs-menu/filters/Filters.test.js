import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';
import toJson from 'enzyme-to-json';

describe('<Filters />', () => {
  let props;
  beforeEach(() => {
    props = {
      showOptions: ['all', 'owned', 'missing'],
      show: 'all',
      setShow: jest.fn(),
      tagSelected: null,
      tags: [{ name: 'test', amount: 2 }],
      setTag: jest.fn(),
      characNameSelected: null,
      characNames: [{ name: 'test', amount: 2 }],
      setCharacName: jest.fn(),
    }
  });
  it('should render the Filters section', () => {
    const wrapper = shallow(<Filters {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
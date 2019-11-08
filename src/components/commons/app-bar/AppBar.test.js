import React from 'react';
import CustomAppBar from './AppBar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<AppBar />', () => {
  it('should render the AppBar', () => {
    const wrapper = shallow(<CustomAppBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
import React from 'react';
import MinifigsMenu from './MinifigsMenu';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('<MinifigsMenu />', () => {
  it('should render the Minifigs Menu', () => {
    const wrapper = shallow(<MinifigsMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
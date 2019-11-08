import React from 'react';
import Minifig from './Minifig';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Minifig />', () => {
  it('should render a minifig', () => {
    const props = {
      reference: 'sw0001',
      details: {
        characterName: 'Battle Droid',
        tags: ['test'],
        name: 'test',
        possessed: true
      }
    }
    const wrapper = shallow(<Minifig {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
import React from 'react';
import { IconButton } from '@material-ui/core';
import LogoLink from './LogoLink';
import { shallow } from 'enzyme';

describe('<LogoLink />', () => {
  let props;
  beforeEach(() => {
    props = {
      reference: 'sw0001',
      type: 'bricklink'
    }
  });
  it('should render the bricklink logo button', () => {
    const wrapper = shallow(<LogoLink {...props} />);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });
  it('should render the brickset logo button', () => {
    props.type = 'brickset'
    const wrapper = shallow(<LogoLink {...props} />);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    });
});
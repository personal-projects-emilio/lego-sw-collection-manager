import React from 'react';
import {InputAdornment, Icon, IconButton } from '@material-ui/core';
import ClearAdornment from './ClearAdornment';
import { shallow } from 'enzyme';

describe('<ClearAdorment />', () => {
  let props;
  beforeEach(() => {
    props = {
      clearAction: jest.fn(),
      position: 'end',
    }
  });
  it('should render a ClearAdornment', () => {
    const wrapper = shallow(<ClearAdornment {...props} />);
    expect(wrapper.find(InputAdornment)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    wrapper.find(IconButton).first().simulate('click');
    expect(props.clearAction).toHaveBeenCalled();
  });
});
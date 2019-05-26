import React from 'react';
import { Grid, Typography, Toolbar, AppBar, Tabs, Tab } from '@material-ui/core';
import CustomAppBar from './AppBar';
import { shallow } from 'enzyme';

describe('<AppBar />', () => {
  let props;
  beforeEach(() => {
    props = {
      location: {
        pathname: '/minifigs'
      },
      classes: {
        fullHeight: 'fullHeight',
      },
      logout: jest.fn(),
      setAuthRedirectPath: jest.fn(),
      authenticate: null
    }
  })
  it('should render the AppBar with auth tab', () => {
    const wrapper = shallow(<CustomAppBar {...props} />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(3);
    wrapper.find(Tab).at(2).simulate('click');
    expect(props.setAuthRedirectPath).toHaveBeenCalledWith(props.location.pathname);
  });
  it('should render the AppBar with logout tab', () => {
    props.authenticate = 'authenticationToken';
    const wrapper = shallow(<CustomAppBar {...props} />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(3);
    wrapper.find(Tab).at(2).simulate('click');
    expect(props.logout).toHaveBeenCalled();
  });
});
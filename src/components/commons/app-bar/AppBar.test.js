import React from 'react';
import { Grid, Typography, Toolbar, AppBar, Tabs, Tab } from '@material-ui/core';
import CustomAppBar from './AppBar';
import { shallow } from 'enzyme';

describe('<AppBar />', () => {
  it('should render the AppBar', () => {
    const props = {
      location: {
        pathname: '/minifigs'
      },
      classes: {
        fullHeight: 'fullHeight',
      }
    }
    const wrapper = shallow(<CustomAppBar {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(2);
  });
});
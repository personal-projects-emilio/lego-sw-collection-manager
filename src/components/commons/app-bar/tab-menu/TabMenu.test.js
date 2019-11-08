import React from 'react';
import TabMenu from './TabMenu';
import { shallow } from 'enzyme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';;

describe('<TabMenu />', () => {
  let props;
  beforeEach(() => {
    props = {
      location: {
        pathname: '/minifigs'
      },
      logout: jest.fn(),
      setAuthRedirectPath: jest.fn(),
      authenticate: null
    }
  })
  it('should render the TabMenu with auth tab', () => {
    const wrapper = shallow(<TabMenu {...props} />);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(3);
    wrapper.find(Tab).at(2).simulate('click');
    expect(props.setAuthRedirectPath).toHaveBeenCalledWith(props.location.pathname);
  });
  it('should render the TabMenu with logout tab', () => {
    props.authenticate = 'authenticationToken';
    const wrapper = shallow(<TabMenu {...props} />);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(3);
    wrapper.find(Tab).at(2).simulate('click');
    expect(props.logout).toHaveBeenCalled();
  });
});
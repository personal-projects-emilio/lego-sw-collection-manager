import React from 'react';
import BurgerNav from './BurgerNav';
import { shallow, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider'
import MenuItem from "@material-ui/core/MenuItem";
import Providers from '../../../../providers';

describe('<BurgerNav />', () => {
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
  it('should render the BurgerNav with auth tab', () => {
    const wrapper = mount(<Providers><BurgerNav {...props} /></Providers>);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Popover)).toHaveLength(1);
    wrapper.find(Button).at(0).simulate('click');
    wrapper.find(Popover).at(0).simulate('close');
    expect(wrapper.find(MenuItem)).toHaveLength(3);
    expect(wrapper.find(Divider)).toHaveLength(2);
    wrapper.find(MenuItem).at(2).simulate('click');
    expect(props.setAuthRedirectPath).toHaveBeenCalledWith(props.location.pathname);
  });
  it('should render the BurgerNav with logout tab', () => {
    props.authenticate = 'authenticationToken';
    const wrapper = shallow(<BurgerNav {...props} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Popover)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(3);
    expect(wrapper.find(Divider)).toHaveLength(2);
    wrapper.find(MenuItem).at(2).simulate('click');
    expect(props.logout).toHaveBeenCalled();
  });
});
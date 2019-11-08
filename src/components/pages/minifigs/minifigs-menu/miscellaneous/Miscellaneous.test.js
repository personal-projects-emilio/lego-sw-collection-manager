import React from 'react';
import Miscellaneous from './Miscellaneous';
import { shallow } from 'enzyme';
import { Button, Fab } from "@material-ui/core";
import toJson from 'enzyme-to-json';

describe('<Miscellaneous />', () => {
  it('should render the miscellaneous part of the minifig menu', () => {
    const props = {
      totalNumber: 1000,
      numberOwned: 900,
      percentageOwned: 90,
      classes: {
        icon: 'icon',
        button: 'button',
        linearProgress: 'linearProgress'
      },
      setPossessionToAll: jest.fn(),
      setAddMinifigForm: jest.fn()
    }
    const wrapper = shallow(<Miscellaneous {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find(Fab).at(0).simulate('click');
    expect(props.setPossessionToAll).toHaveBeenCalledWith(true);
    wrapper.find(Fab).at(1).simulate('click');
    expect(props.setPossessionToAll).toHaveBeenCalledWith(false);
    wrapper.find(Button).at(0).simulate('click');
    expect(props.setAddMinifigForm).toHaveBeenCalled();
  });
});
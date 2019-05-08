import React from 'react';
import Miscellaneous from './Miscellaneous';
import { shallow } from 'enzyme';
import { Typography, LinearProgress, Grid, Tooltip, Button, Icon, Divider, Fab } from "@material-ui/core";

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
      }
    }
    const wrapper = shallow(<Miscellaneous {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(4);
    expect(wrapper.find(Typography)).toHaveLength(2);
    expect(wrapper.find(LinearProgress)).toHaveLength(1);
    expect(wrapper.find(Tooltip)).toHaveLength(3);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Icon)).toHaveLength(4);
    expect(wrapper.find(Divider)).toHaveLength(2);
    expect(wrapper.find(Fab)).toHaveLength(2);
  });
});
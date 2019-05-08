import React from 'react';
import Miscellaneous from './Miscellaneous';
import { shallow } from 'enzyme';
import { Typography, LinearProgress, Grid, Tooltip } from "@material-ui/core";

describe('<Miscellaneous />', () => {
  it('should render the Minifig Menu', () => {
    const props = {
      totalNumber: 1000,
      numberOwned: 900,
      percentageOwned: 90
    }
    const wrapper = shallow(<Miscellaneous {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(2);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(LinearProgress)).toHaveLength(1);
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });
});
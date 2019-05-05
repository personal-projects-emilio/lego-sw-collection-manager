import React from 'react';
import MinifigMenu from './MinifigMenu';
import { shallow } from 'enzyme';
import { Grid, Paper, Typography } from "@material-ui/core";
import Filters from "./filters";

describe('<MinifigMenu />', () => {
  let props;
  beforeEach(() => {
    props = {
      totalNumber: 1000,
      numberOWned: 900
    }
  });
  it('should render the Minifig Menu', () => {
    const wrapper = shallow(<MinifigMenu {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(3);
    expect(wrapper.find(Paper)).toHaveLength(2);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Filters)).toHaveLength(1);
  });
});
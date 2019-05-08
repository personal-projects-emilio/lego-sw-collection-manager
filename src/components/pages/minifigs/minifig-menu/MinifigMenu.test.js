import React from 'react';
import MinifigMenu from './MinifigMenu';
import { shallow } from 'enzyme';
import { Grid, Paper } from "@material-ui/core";
import Filters from "./filters";
import Miscellaneous from "./miscellaneous";

describe('<MinifigMenu />', () => {
  it('should render the Minifig Menu', () => {
    const wrapper = shallow(<MinifigMenu />);
    expect(wrapper.find(Grid)).toHaveLength(5);
    expect(wrapper.find(Paper)).toHaveLength(2);
    expect(wrapper.find(Filters)).toHaveLength(1);
    expect(wrapper.find(Miscellaneous)).toHaveLength(1);
  });
});
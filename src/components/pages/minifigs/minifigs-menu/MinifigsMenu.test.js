import React from 'react';
import MinifigsMenu from './MinifigsMenu';
import { shallow } from 'enzyme';
import { Grid, Paper } from "@material-ui/core";
import Filters from "./filters";
import Miscellaneous from "./miscellaneous";

describe('<MinifigsMenu />', () => {
  it('should render the Minifigs Menu', () => {
    const wrapper = shallow(<MinifigsMenu />);
    expect(wrapper.find(Grid)).toHaveLength(5);
    expect(wrapper.find(Paper)).toHaveLength(2);
    expect(wrapper.find(Filters)).toHaveLength(1);
    expect(wrapper.find(Miscellaneous)).toHaveLength(1);
  });
});
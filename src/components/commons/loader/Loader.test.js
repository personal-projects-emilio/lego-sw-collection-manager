import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('<Loader />', () => {
  it('should render the loader', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
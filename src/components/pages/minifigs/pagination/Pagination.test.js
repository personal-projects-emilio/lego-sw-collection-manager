import React from 'react';
import { shallow } from 'enzyme';
import CustomPagination from './Pagination';
import Pagination from 'rc-pagination';
import { Grid } from '@material-ui/core';

describe('<Pagination />', () => {
  const props = {
    activePage: 1,
    numberPerPage: 200,
    nbPerPagesOptions: ['100', '200'],
    setActivePage: jest.fn(),
    setNumberPerPage: jest.fn(),
    total: 188,
    isSmall: false
  }
  it('should render the pagination', () => {
      const wrapper = shallow(<CustomPagination {...props} />);
      expect(wrapper.find(Pagination)).toHaveLength(1);
      expect(wrapper.find(Grid)).toHaveLength(1);
      wrapper.find(Pagination).simulate('showSizeChange', 2, 100);
      expect(props.setActivePage).toHaveBeenCalledWith(2);
      expect(props.setNumberPerPage).toHaveBeenCalledWith(100);
      props.total = 1000;
      shallow(<CustomPagination {...props} />).render();
      props.total = 0;
      shallow(<CustomPagination {...props} />).render();
  });
});
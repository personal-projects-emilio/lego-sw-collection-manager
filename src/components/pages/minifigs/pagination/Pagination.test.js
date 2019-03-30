import React from 'react';
import { shallow } from 'enzyme';
import CustomPagination from './Pagination';
import Pagination from 'rc-pagination';

describe('<Pagination />', () => {
  const props = {
    activePage: 1,
    numberPerPage: 100,
    nbPerPagesOptions: ['10', '20'],
    setActivePage: jest.fn(),
    setNumberPerPage: jest.fn()
  }
  it('should render the pagination', () => {
      const wrapper = shallow(<CustomPagination {...props} />);
      expect(wrapper.find(Pagination)).toHaveLength(1);
      wrapper.find(Pagination).simulate('showSizeChange', 2, 200);
      expect(props.setActivePage).toHaveBeenCalledWith(2);
      expect(props.setNumberPerPage).toHaveBeenCalledWith(200);
  });
});
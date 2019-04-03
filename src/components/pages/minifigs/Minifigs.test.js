import React from 'react';
import { Grid } from "@material-ui/core";
import Minifigs from './Minifigs';
import Minifig from './minifig'
import { mount, shallow } from 'enzyme';
import Pagination from "./pagination";
import Providers from '../../../providers'

describe('<Minifigs />', () => {
  let props;
  beforeEach(() => {
    props = {
      fetchMinifigs: jest.fn(),
      activePage: 1,
      numberPerPage: 1,
    }
  })
  it('should render the minifigs page', () => {
      const wrapper = shallow(<Minifigs {...props} />);
      expect(wrapper.find(Grid)).toHaveLength(1);
      expect(wrapper.find(Pagination)).toHaveLength(2);
  });
  it('should fetch minifigs when mounting',() => {
    mount(<Providers><Minifigs {...props} /></Providers>);
    expect(props.fetchMinifigs).toHaveBeenCalled();
  })
  it('should show the minifigs',() => {
    props.minifigs = {
      sw0001: {
        name: 'test',
        characterName: 'Battle Droid',
        possessed: true,
        tags: []
      },
      sw0001b: {
        name: 'test',
        characterName: 'test',
        possessed: true, 
        tags: []
      }
    }
    const wrapper = mount(<Providers><Minifigs {...props} /></Providers>);
    expect(wrapper.find(Minifig)).toHaveLength(1);

  });
});

import React from 'react';
import Minifigs from './Minifigs';
import Minifig from './minifig'
import { mount } from 'enzyme';
import Pagination from "./pagination";
import Providers from '../../../providers'

describe('<Minifigs />', () => {
  let props;
  beforeEach(() => {
    props = {
      show: 'all',
      tagSelected: null,
      characNameSelected: null,
      minifigs: null,
      fetchMinifigs: jest.fn(),
      activePage: 1,
      numberPerPage: 1,
      manageSearchParams: jest.fn(),
      resetFilters: jest.fn(),
    }
  })
  it('should fetch minifigs when mounting',() => {
    const wrapper = mount(<Providers><Minifigs {...props} /></Providers>);
    expect(props.fetchMinifigs).toHaveBeenCalled();
    wrapper.unmount();
    expect(props.resetFilters).toHaveBeenCalled();
  })
  it('should show the minifigs and manage the filter',() => {
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
    props.show = 'owned';
    props.characNameSelected = 'test';
    const wrapper = mount(<Providers><Minifigs {...props} /></Providers>);
    expect(wrapper.find(Pagination)).toHaveLength(2);
    expect(props.manageSearchParams).toHaveBeenCalled();
    expect(wrapper.find(Minifig)).toHaveLength(1);
  });
  it('should show the minifigs and manage the filter',() => {
    props.numberPerPage = 10;
    props.minifigs = {
      sw0001: {
        name: 'test',
        characterName: 'Battle Droid',
        possessed: true,
        tags: [
          'test'
        ]
      },
      sw0001b: {
        name: 'test',
        characterName: 'test',
        possessed: false, 
        tags: [
          'test'
        ]
      }
    }
    props.show = 'missing';
    props.tagSelected = 'test';
    const wrapper = mount(<Providers><Minifigs {...props} /></Providers>);
    expect(wrapper.find(Minifig)).toHaveLength(1);
  });
  it('should show the minifigs without filter',() => {
    props.minifigs = {
      sw0001: {
        name: 'test',
        characterName: 'Battle Droid',
        possessed: false,
        tags: []
      },
      sw0001b: {
        name: 'test',
        characterName: 'test',
        possessed: true, 
        tags: [
          'test'
        ]
      }
    }
    const wrapper = mount(<Providers><Minifigs {...props} /></Providers>);
    expect(wrapper.find(Minifig)).toHaveLength(1);
  });
});

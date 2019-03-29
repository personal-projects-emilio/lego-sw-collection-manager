import React from 'react';
import { Grid } from "@material-ui/core";
import Minifigs from './Minifigs';
import Minifig from './minifig'
import { mount, shallow } from 'enzyme';

describe('<Minifigs />', () => {
  let props;
  beforeEach(() => {
    props = {
      fetchMinifigs: jest.fn()
    }
  })
  it('should render the minifigs page', () => {
      props.minifigs = {
        sw0001: {
          name: 'test',
          characterName: 'Battle Droid',
          possessed: true,
          tags: []
        }
      }
      const wrapper = shallow(<Minifigs {...props} />);
      expect(wrapper.find(Grid)).toHaveLength(2);
      expect(wrapper.find(Minifig)).toHaveLength(1);
  });
  it('should fetch minifigs when mounting',() => {
    const wrapper = mount(<Minifigs {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(props.fetchMinifigs).toHaveBeenCalled();
  })
});
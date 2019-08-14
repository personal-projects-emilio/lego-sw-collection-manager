import React from 'react';
import Frames from './Frames';
import { mount, shallow } from 'enzyme';
import Providers from '../../../providers'
import { Paper, TextField, MenuItem } from "@material-ui/core";

describe('<Frames />', () => {
  let props;
  beforeEach(() => {
    props = {
      minifigs: null,
      frames: null,
      fetchMinifigs: jest.fn(),
      fetchFrames: jest.fn(),
      history: {
        push: jest.fn()
      }
    }
  })
  it('should fetch minifigs when mounting',() => {
    mount(<Providers><Frames {...props} /></Providers>);
    expect(props.fetchMinifigs).toHaveBeenCalledTimes(1);
    expect(props.fetchFrames).toHaveBeenCalledTimes(1);
  });

  it('should render frames selectfield',() => {
    props.frames = {
      test: {},
      test2: {}
    }
    props.minifigs = {
      sw0001: {}
    }
    const wrapper = shallow(<Frames {...props} />);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(2);
    wrapper.find(TextField).simulate('change', {target: {value: 'test'}})
    expect(props.history.push).toHaveBeenCalledWith('/frames/test');
  });
});

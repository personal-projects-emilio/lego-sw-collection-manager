import React from 'react';
import Frames from './Frames';
import { mount } from 'enzyme';
import Providers from '../../../providers'

describe('<Frames />', () => {
  let props;
  beforeEach(() => {
    props = {
      minifigs: null,
      frames: null,
      fetchMinifigs: jest.fn(),
      fetchFrames: jest.fn(),
    }
  })
  it('should fetch minifigs when mounting',() => {
    mount(<Providers><Frames {...props} /></Providers>);
    expect(props.fetchMinifigs).toHaveBeenCalledTimes(1);
    expect(props.fetchFrames).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Routes from './Routes';
import { shallow } from 'enzyme';

describe('<Routes />', () => {
  it('should render a switch with routes', () => {
      const wrapper = shallow(<Routes />);
      expect(wrapper.find(Switch)).toHaveLength(1);
      expect(wrapper.find(Route)).toHaveLength(2);
      expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
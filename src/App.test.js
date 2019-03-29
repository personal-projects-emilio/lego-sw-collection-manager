import React from 'react';
import Providers from "./providers";
import Routes from "./routes";
import AppBar from "./components/commons/app-bar";
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render the appbar and routes with providers', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Providers)).toHaveLength(1);
      expect(wrapper.find(AppBar)).toHaveLength(1);
      expect(wrapper.find(Routes)).toHaveLength(1);
  });
});
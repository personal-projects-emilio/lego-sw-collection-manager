import React from 'react';
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import LogoLink from './logo-link';
import NameAndTags from './name-and-tags';import Minifig from './Minifig';
import { shallow } from 'enzyme';
import Management from "./management";

describe('<Minifig />', () => {
  it('should render a minifig', () => {
    const props = {
        reference: 'sw0001',
        details: {
            characterName: 'Battle Droid',
            tags: ['test'],
            name: 'test',
            possessed: true
        }
    }
      const wrapper = shallow(<Minifig {...props} />);
      expect(wrapper.find(Grid)).toHaveLength(4);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find(Typography)).toHaveLength(1);
      expect(wrapper.find(Divider)).toHaveLength(1);
      expect(wrapper.find(LogoLink)).toHaveLength(2);
      expect(wrapper.find(NameAndTags)).toHaveLength(1);
      expect(wrapper.find(Paper)).toHaveLength(1);
      expect(wrapper.find(Management)).toHaveLength(1);
  });
});
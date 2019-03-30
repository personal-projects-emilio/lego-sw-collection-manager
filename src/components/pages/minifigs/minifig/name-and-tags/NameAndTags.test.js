import React from 'react';
import { Divider, Chip } from "@material-ui/core";
import NameAndTags from './NameAndTags';
import { shallow } from 'enzyme';

describe('<NameAndTags />', () => {
  let props;
  beforeEach(() => {
    props = {
      characterName: 'Battle Droid',
      classes: {
        chip: 'chip'
      },
      tags: []
    }
  });
  it('should render the character name', () => {
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Chip)).toHaveLength(1);
  });
  it('should render the character name and tags', () => {
    props.tags = ['test']
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(2);
    expect(wrapper.find(Chip)).toHaveLength(2);
    });
});
import React from 'react';
import { Divider, Button } from "@material-ui/core";
import NameAndTags from './NameAndTags';
import { shallow } from 'enzyme';

describe('<NameAndTags />', () => {
  let props;
  beforeEach(() => {
    props = {
      characterName: 'Battle Droid',
      classes: {
        button: 'button'
      },
      tags: []
    }
  });
  it('should render the character name', () => {
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('should render the character name and tags', () => {
    props.tags = ['test']
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(2);
    });
});
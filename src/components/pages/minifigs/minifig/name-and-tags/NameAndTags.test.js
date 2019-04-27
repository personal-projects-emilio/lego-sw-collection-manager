import React from 'react';
import { Divider, Chip } from "@material-ui/core";
import NameAndTags from './NameAndTags';
import { shallow } from 'enzyme';

describe('<NameAndTags />', () => {
  let props;
  beforeEach(() => {
    props = {
      characterName: 'Battle Droid',
      characNameSelected: null,
      setCharacNameSelected: jest.fn(),
      tags: [],
      tagSelected: null,
      setTagSelected: jest.fn(),
      classes: {
        chip: 'chip',
        label: 'label'
      },
    }
  });
  it('should render the character name', () => {
    props.tagSelected = 'test';
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(2);
    expect(wrapper.find(Chip)).toHaveLength(1);
    wrapper.find(Chip).first().simulate('click');
    expect(props.setCharacNameSelected).toHaveBeenNthCalledWith(1, 'Battle Droid');
  });
  it('should render the character name and tags', () => {
    props.characNameSelected = 'Battle Droid';
    props.tags = ['test', 'testBis'];
    props.tagSelected = 'test';
    const wrapper = shallow(<NameAndTags {...props} />);
    expect(wrapper.find(Divider)).toHaveLength(3);
    expect(wrapper.find(Chip)).toHaveLength(3);
    wrapper.find(Chip).last().simulate('click');
    expect(props.setTagSelected).toHaveBeenNthCalledWith(1, 'testBis');
    });
});
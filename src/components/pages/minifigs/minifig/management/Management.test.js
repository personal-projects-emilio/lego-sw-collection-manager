import React from 'react';
import Management from './Management';
import { shallow } from 'enzyme';
import { Grid, Checkbox, IconButton, Icon, Tooltip, Modal, Paper, Button, Typography } from "@material-ui/core";

describe('<Management />', () => {
  let props;
  beforeEach(() => {
    props = {
      details: {
        possessed: true,
        characterName: 'Battle Droid',
        name: 'Battle Droid',
        tags: ['Battle Droid', 'CIS', 'Droid']
      },
      reference: 'sw0001',
      togglePossession: jest.fn(),
      deleteMinifig: jest.fn(),
      setEditMinifigForm: jest.fn(),
    }
  });
  it('should render the minifig management part', () => {
    const wrapper = shallow(<Management {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Tooltip)).toHaveLength(3);
    expect(wrapper.find(Checkbox)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(2);
    expect(wrapper.find(Icon)).toHaveLength(2);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
  it('should manage every action', () => {
    const wrapper = shallow(<Management {...props} />);
    wrapper.find(Checkbox).simulate('change');
    expect(props.togglePossession).toHaveBeenCalled();
    wrapper.find(IconButton).at(0).simulate('click');
    expect(props.setEditMinifigForm).toHaveBeenCalledWith({
      reference: props.reference,
      ...props.details
    });
    wrapper.find(IconButton).at(1).simulate('click');
    wrapper.find(Button).at(0).simulate('click');
    expect(props.deleteMinifig).toHaveBeenCalled();
    wrapper.find(Button).at(1).simulate('click');
    wrapper.find(Modal).first().simulate('close');
  });
});
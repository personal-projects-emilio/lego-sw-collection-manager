import React from 'react';
import Management from './Management';
import { shallow } from 'enzyme';
import { Grid, Checkbox, IconButton, Icon, Tooltip } from "@material-ui/core";

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
      reference: 'sw0001'
    }
  });
  it('should render the minifig management part', () => {
    const wrapper = shallow(<Management {...props} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Tooltip)).toHaveLength(3);
    expect(wrapper.find(Checkbox)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(2);
    expect(wrapper.find(Icon)).toHaveLength(2);
  });
});
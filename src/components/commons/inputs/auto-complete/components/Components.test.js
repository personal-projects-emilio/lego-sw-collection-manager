import React from 'react';
import { shallow } from 'enzyme';
import {
  Control,
  Option,
  Menu,
  MultiValue,
  ValueContainer,
  NoOptionsMessage
} from "./Components";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

describe('Autocomplete Components', () => {
  let props;
  beforeEach(() => {
    props = {
      selectProps: {
        classes: {}
      },
      removeProps: {}
    }
  });
  it('should render the autocomplete components', () => {
    const option = shallow(<Option {...props} />);
    expect(option.find(MenuItem)).toHaveLength(1);
    expect(option.find(MenuItem).first().props().style.fontWeight).toBe(400);
    props.isSelected = true;
    const selectedOption = shallow(<Option {...props} />);
    expect(selectedOption.find(MenuItem)).toHaveLength(1);
    expect(selectedOption.find(MenuItem).first().props().style.fontWeight).toBe(500);

    const control = shallow(<Control {...props} />);
    expect(control.find(TextField)).toHaveLength(1);

    const menu = shallow(<Menu {...props} />);
    expect(menu.find(Paper)).toHaveLength(1);

    const multiValue = shallow(<MultiValue {...props} />);
    expect(multiValue.find(Chip)).toHaveLength(1);

    const valueContainer = shallow(<ValueContainer {...props} />);
    expect(valueContainer.find('div')).toHaveLength(1);

    const noOptionsMessage = shallow(<NoOptionsMessage {...props} />);
    expect(noOptionsMessage.find(Typography)).toHaveLength(1);
  });
});
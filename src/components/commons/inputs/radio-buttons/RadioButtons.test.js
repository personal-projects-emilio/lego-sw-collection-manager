import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import RadioButtons from './RadioButtons';
import { shallow } from 'enzyme';

describe('<Switch />', () => {
  let props;
  beforeEach(() => {
    props = {
      value: 'all',
      label: 'RadioButtons test',
      inputChange: jest.fn(),
      config: {
        row: true,
        options: ['all', 'owned', 'missing']
      }
    }
  });
  it('should render a custom switch', () => {
    const wrapper = shallow(<RadioButtons {...props} />);
    expect(wrapper.find(FormControl)).toHaveLength(1);
    expect(wrapper.find(FormLabel)).toHaveLength(1);
    expect(wrapper.find(RadioGroup)).toHaveLength(1);
    wrapper.find(RadioGroup).first().simulate('change', {target: {value: 'owned'}});
    expect(props.inputChange).toHaveBeenCalledWith('owned');
    expect(wrapper.find(FormControlLabel)).toHaveLength(3);
  });
});
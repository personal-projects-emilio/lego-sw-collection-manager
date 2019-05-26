import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomTextField from './TextField';
import { shallow } from 'enzyme';

describe('<TextField />', () => {
  let props;
  beforeEach(() => {
    props = {
      value: '',
      label: 'TextField test',
      inputChange: jest.fn(),
      inputKey: 'test',
      placeholder: 'Test placeholder',
      errorText: 'Test error text',
      valid: false,
      touched: true,
      config: {
        type: 'number'
      }
    }
  });
  it('should render a custom textfield', () => {
    const wrapper = shallow(<CustomTextField {...props} />);
    expect(wrapper.find(TextField)).toHaveLength(1);
    wrapper.find(TextField).first().simulate('change', {target: {value: 'newValue'}});
    expect(props.inputChange).toHaveBeenCalledWith('newValue');
  });
});
import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const customTextField = props => (
  <TextField
    value={props.value}
    label={props.label}
    placeholder={props.placeholder}
    fullWidth
    InputLabelProps={{
      shrink: props.placeholder && true
    }}
    type={props.config && props.config.type}
    onChange={e => props.inputChange(e.target.value)}
    error={!props.valid && props.touched}
    helperText={!props.valid && props.touched && props.errorText}
    {...props.muiProps}
  />
);

customTextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  muiProps: PropTypes.object
}

export default customTextField;

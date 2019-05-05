import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';
import ClearAdornment from '../clear-adornment';

export const selectField = props => {
  const { options, value, setValue, label, resetValue, classes } = props;

  const changeHandler = e => {
    const newValue = e.target.value;
    newValue !== value && setValue(newValue);
  }
  return (
    <TextField
      id="select-show-filter"
      label={label}
      select
      className={classes.Selectfield}
      value={value ? value : ''}
      fullWidth
      variant="outlined"
      onChange={changeHandler}
      InputProps={{
        endAdornment: value && (
          <ClearAdornment position="end" clearAction={resetValue} />
        ),
        fullWidth: !value
      }}
      SelectProps={{
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          }
        }
      }}
    >
      {options.map(option => (
        <MenuItem key={`${option.value}-selectfield-choice`} value={option.value}>
          {option.displayed}
        </MenuItem>
      ))}
    </TextField>
)}

selectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    displayed: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  setValue: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default selectField;
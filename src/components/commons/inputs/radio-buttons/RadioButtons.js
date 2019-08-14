import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";

export const customRadioButtons = props => {
  const { value, inputChange, label, config } = props;
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        row={!!config.row}
        value={value}
        onChange={e => inputChange(e.target.value)}
      >
        {config.options.map(option => (
          <FormControlLabel
            value={option}
            control={<Radio color="primary" />}
            key={`show-${option}-option`}
            label={`${option[0].toUpperCase()}${option.slice(1)}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

customRadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    row: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string)
  })
};

export default customRadioButtons;

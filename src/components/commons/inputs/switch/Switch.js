import React from "react";
import PropTypes from 'prop-types';
import { Switch, FormControlLabel } from "@material-ui/core";

export const customSwitch = props => (
  <FormControlLabel
    control={
      <Switch
        checked={props.value}
        color="primary"
        onChange={(_e, val) => props.inputChange(val, props.inputKey)}
        value={props.value}
      />
    }
    label={props.label}
    labelPlacement="start"
  />
);

customSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}

export default customSwitch;

import React from "react";
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

export default customSwitch;

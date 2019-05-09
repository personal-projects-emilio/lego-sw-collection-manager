import React from "react";
import { Grid } from '@material-ui/core';
import Switch from './switch';

export const inputs = props => {
  const {type} = props;
  
  const inputChangeHandler = (val, inputKey) => {
    props.updateInput(val, inputKey);
  }

  let inputElement = null;
  switch (type) {
    case 'switch':
      inputElement = (
        <Switch
          {...props}
          inputChange={inputChangeHandler}
        />
      )
      break;
    default:
      inputElement = <span>Input not supported</span>;
  }
  return (
    <Grid item xs={12}>
      {inputElement}
    </Grid>
  )
}

export default inputs;
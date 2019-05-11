import React from "react";
import { Grid } from "@material-ui/core";
import Inputs from "../../commons/inputs";

export const app = props => (
  <Grid container>
    {props.minifigForm && Object.keys(props.minifigForm).map(inputKey => (
      <Inputs
        key={inputKey}
        inputKey={inputKey}
        updateInput={props.updateInput}
        {...props.minifigForm[inputKey]} />
    ))}
  </Grid>
);

export default app;

import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Button } from "@material-ui/core";
import Inputs from "../../commons/inputs";

export const auth = props => (
  <Paper className={props.classes.paper}>
    <Grid container justify="center">
      {props.template &&
        Object.keys(props.template).map(inputKey => (
          <Inputs
            key={inputKey}
            inputKey={inputKey}
            updateInput={value => props.updateInput(value, inputKey)}
            {...props.template[inputKey]}
          />
        ))}
      <Button
        color="primary"
        variant="contained"
        onClick={props.authenticate}
        disabled={!props.formIsValid}
      >
        Authenticate
      </Button>
    </Grid>
  </Paper>
);

auth.propTypes = {
  classes: PropTypes.object,
  template: PropTypes.object,
  updateInput: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
  formIsValid: PropTypes.bool.isRequired
};

export default auth;

import React from "react";
import PropTypes from "prop-types";
import { Modal, Paper, Grid, Button } from "@material-ui/core";
import Inputs from "../../../commons/inputs";

export const minifigFormModal = props => {
  const {
    classes,
    updateInput,
    template,
    resetMinifigForm,
    submitMinifigForm,
    formIsValid
  } = props;
  const oldReference = template && template.reference.validation.reference;

  return (
    <Modal open={!!template} onClose={resetMinifigForm}>
      <Paper className={classes.paper}>
        <Grid container justify="center">
          {template &&
            Object.keys(template).map(inputKey => (
              <Inputs
                key={inputKey}
                inputKey={inputKey}
                updateInput={value => updateInput(value, inputKey)}
                {...template[inputKey]}
              />
            ))}
          <Button
            color="primary"
            variant="contained"
            onClick={submitMinifigForm}
            disabled={!formIsValid}
          >
            {oldReference ? `Edit ${oldReference}` : "Add a minifig"}
          </Button>
        </Grid>
      </Paper>
    </Modal>
  );
};

minifigFormModal.propTypes = {
  template: PropTypes.object,
  updateInput: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  resetMinifigForm: PropTypes.func.isRequired,
  submitMinifigForm: PropTypes.func.isRequired,
  formIsValid: PropTypes.bool.isRequired
};

export default minifigFormModal;

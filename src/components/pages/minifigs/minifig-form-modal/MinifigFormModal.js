import React from "react";
import PropTypes from "prop-types";
import { Modal, Paper, Grid } from "@material-ui/core";
import Inputs from "../../../commons/inputs";

export const minifigFormModal = props => {
  const { classes, updateInput, template, resetMinifigForm } = props;

  return (
    <Modal open={!!template} onClose={resetMinifigForm}>
      <Paper className={classes.paper}>
        <Grid container>
          {template &&
            Object.keys(template).map(inputKey => (
              <Inputs
                key={inputKey}
                inputKey={inputKey}
                updateInput={updateInput}
                {...template[inputKey]}
              />
            ))}
        </Grid>
      </Paper>
    </Modal>
  );
};

minifigFormModal.propTypes = {
  template: PropTypes.object,
  updateInput: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  resetMinifigForm: PropTypes.func.isRequired
};

export default minifigFormModal;

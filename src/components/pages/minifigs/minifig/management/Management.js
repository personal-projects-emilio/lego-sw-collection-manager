import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Grid, Checkbox, IconButton, Icon, Tooltip, Modal, Button, Paper, Typography } from "@material-ui/core";
import styles from './Management.module.css';

export const management = props => {
  const [open, setOpen] = useState(false);
  const { details, reference, deleteMinifig, togglePossession } = props;

  const deleteHandler = () => {
    setOpen(false);
    deleteMinifig(reference);
  }
  return (
    <Grid container justify="space-evenly">
      <Tooltip title="Possession" aria-label="Possession">
        <Checkbox
          checked={!!details.possessed}
          color="default"
          onChange={() => togglePossession(reference)}
        />
      </Tooltip>
      <Tooltip title="Edit" aria-label="Edit">
        <IconButton>
          <Icon>edit</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" aria-label="Delete">
        <IconButton onClick={() => setOpen(true)}>
          <Icon>delete</Icon>
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper className={styles.Paper}>
          <Typography variant="h6">
            Are you sure you want to delete the {reference.toUpperCase()} minifig? This action is irreversible.
          </Typography>
          <Button variant="outlined" onClick={deleteHandler}>Delete</Button>
          <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
        </Paper>
      </Modal>
    </Grid>
  )
}

management.propTypes = {
    reference: PropTypes.string.isRequired,
    details: PropTypes.shape({
        characterName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        possessed: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string)
    }),
    togglePossession: PropTypes.func.isRequired,
    deleteMinifig: PropTypes.func.isRequired
}

export default management;

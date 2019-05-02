import React from "react";
import PropTypes from 'prop-types';
import { Grid, Checkbox, IconButton, Icon, Tooltip } from "@material-ui/core";

export const management = props => {
  const { details, reference } = props;
  return (
    <Grid container justify="space-evenly">
      <Tooltip title="Possession" aria-label="Possession">
        <Checkbox
          checked={!!details.possessed}
          color="default"
          onChange={() => props.togglePossession(reference)}
        />
      </Tooltip>
      <Tooltip title="Edit" aria-label="Edit">
        <IconButton>
          <Icon>edit</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" aria-label="Delete">
        <IconButton>
          <Icon>delete</Icon>
        </IconButton>
      </Tooltip>
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
    togglePossession: PropTypes.func.isRequired
}

export default management;

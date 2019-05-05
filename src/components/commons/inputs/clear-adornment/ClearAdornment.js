import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, Icon, IconButton } from '@material-ui/core';

export const clearAdornment = props => (
  <InputAdornment position={props.position}>
    <IconButton onClick={props.clearAction}>
      <Icon>clear</Icon>
    </IconButton>
  </InputAdornment>
)

clearAdornment.propTypes = {
  clearAction: PropTypes.func.isRequired,
  position: PropTypes.string,
}

export default clearAdornment;
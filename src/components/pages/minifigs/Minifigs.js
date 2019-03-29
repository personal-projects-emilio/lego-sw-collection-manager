import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import Minifig from './minifig'

export const minifigs = props => {
  useEffect(() => {
    !props.minifigs && props.fetchMinifigs()
  }, [])
  return (
    <Grid container justify="center" alignItems="stretch">
      {/* <MinifigsSorter /> */}
      {/* <MinifigsList/> */}
      {props.minifigs && Object.keys(props.minifigs).map((minifig, i) =>
         i < 12 && <Grid item xs={4} md={3} lg={2} key={minifig} ><Minifig reference={minifig} details={props.minifigs[minifig]}/></Grid>)}
    </Grid>
  )
}

minifigs.propTypes = {
  minifigs: PropTypes.object
}

export default minifigs;

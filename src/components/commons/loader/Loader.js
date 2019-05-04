import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import styles from './Loader.module.css';

export const loader = () => (
  <Grid container className={styles.Loader} justify="center" alignItems="center" direction="column">
    <CircularProgress size={200} thickness={2} disableShrink />
    <Typography variant="h5" color="primary">
      Loading...
    </Typography>
  </Grid>
)

export default loader;
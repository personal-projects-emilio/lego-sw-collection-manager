import React from "react";
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from "@material-ui/core";
import styles from "./MinifigMenu.module.css";
import Filters from "./filters";

export const minifigMenu = props => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Paper classes={{root: styles.Paper}}>
        <Typography>
          {`You owned ${props.numberOwned}/${props.totalNumber} of the minifigs in our database`}
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
    <Paper classes={{root: styles.Paper}}>
        <Filters />
      </Paper>
    </Grid>
  </Grid>
);

minifigMenu.propTypes = {
  totalNumber: PropTypes.number,
  numberOwned: PropTypes.number
}

export default minifigMenu;

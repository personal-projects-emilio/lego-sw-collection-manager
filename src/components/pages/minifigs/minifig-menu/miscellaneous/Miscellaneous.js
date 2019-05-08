import React from "react";
import PropTypes from "prop-types";
import { Typography, LinearProgress, Grid, Tooltip } from "@material-ui/core";
import styles from "./Miscellaneous.module.css";

export const miscellaneous = props => (
  <>
    <Grid item xs={12}>
      <Typography align="center" variant="subtitle1">
        {`You possess ${props.numberOwned} of the ${props.totalNumber} minifigs in our database`}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Tooltip
        title={`${props.percentageOwned}%`}
        placement={props.percentageOwned > 50 ? 'top-end' : 'top'}>
        <LinearProgress
          variant="determinate"
          value={props.percentageOwned}
          className={styles.LinearProgress}
        />
      </Tooltip>
    </Grid>
  </>
);

miscellaneous.propTypes = {
  totalNumber: PropTypes.number,
  numberOwned: PropTypes.number,
  percentageOwned: PropTypes.number
};

export default miscellaneous;

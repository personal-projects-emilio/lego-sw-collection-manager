import React from "react";
import PropTypes from "prop-types";
import { Typography, LinearProgress, Grid, Tooltip, Button, Icon } from "@material-ui/core";

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
          className={props.classes.linearProgress}
        />
      </Tooltip>
    </Grid>
    <Grid item xs={12}>
      <Button color="primary" variant="contained" className={props.classes.button}>
        Add a minifig
        <Icon className={props.classes.icon}>add_circle</Icon>
      </Button>
      <Button
        color="primary"
        variant="contained"
        className={props.classes.button}
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(props.minifigs)
        )}`}
        download="minifigs.json"
      >
        Download minifigs
        <Icon className={props.classes.icon}>cloud_download</Icon>
      </Button>
    </Grid>
  </>
);

miscellaneous.propTypes = {
  totalNumber: PropTypes.number,
  numberOwned: PropTypes.number,
  percentageOwned: PropTypes.number,
  minifigs: PropTypes.object,
};

export default miscellaneous;

import React from "react";
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import LogoLink from './logo-link';
import NameAndTags from './name-and-tags';
import styles from './Minifig.module.css';
import Management from "./management";

export const minifigs = props => {
  const { reference, details } = props;
  return (
    <Paper className={styles.paper}>
      <Grid container className={styles.container} direction="column" justify="space-between">
        <Grid item className={styles.pictureContainer}>
          <img
            className={styles.picture}
            src={`https://img.bricklink.com/ItemImage/MN/0/${reference}.png`}
            alt={`${reference}-bricklink-png`}
          />
        </Grid>
        <Grid item className="full-width">
          <Typography>{reference.toUpperCase()}</Typography>
          <NameAndTags characterName={details.characterName} tags={details.tags} />
          <LogoLink reference={reference} type={'bricklink'} />
          <LogoLink reference={reference} type={'brickset'} />
          <Divider variant="fullWidth" />
        </Grid>
        <Grid item className="full-width">
          <Management reference={reference} details={details} />
        </Grid>
      </Grid>
    </Paper>
  )
}

minifigs.propTypes = {
  reference: PropTypes.string.isRequired,
  details: PropTypes.shape({
    characterName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    possessed: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  })
}

export default minifigs;

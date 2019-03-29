import React from "react";
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import LogoLink from './logo-link';
import NameAndTags from './name-and-tags';
import styles from './Minifig.module.css';

export const minifigs = props => {
    const { reference, details } = props;
  return (
    <Paper className={styles.paper}>
      <Grid container>
          <Grid item xs={12}>
              <img
                  className={styles.picture}
                  src={`https://img.bricklink.com/ItemImage/MN/0/${reference}.png`}
                  alt={`${reference}-bricklink-png`}
              />
              <Typography>{reference.toUpperCase()}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
            <LogoLink reference={reference} type={'bricklink'} />
						<LogoLink reference={reference} type={'brickset'} />
          </Grid>
          <Grid item xs={12}>
            <NameAndTags characterName={details.characterName} tags={details.tags} />
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

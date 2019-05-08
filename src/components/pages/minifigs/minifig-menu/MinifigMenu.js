import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "./MinifigMenu.module.css";
import Filters from "./filters";
import Miscellaneous from "./miscellaneous";

export const minifigMenu = props => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Paper classes={{ root: styles.Paper }}>
        <Grid container className={styles.Container} alignItems="center">
          <Miscellaneous />
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper classes={{ root: styles.Paper }}>
        <Grid container className={styles.Container}>
          <Filters />
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default minifigMenu;

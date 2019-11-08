import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import appLogo from '../../../assets/images/app-logo/elephant.png';
import styles from './AppBar.module.css';
import BurgerNav from "./burger-nav";
import TabMenu from "./tab-menu";

export const appBar = props => (
  <AppBar position="sticky" color="default" elevation={0}>
    <Toolbar variant="dense">
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="inherit" className={styles.flex}>
          <img alt="app-logo" src={appLogo} className={styles.appLogo} />
          <Hidden smDown>Lego SW Collection Manager</Hidden>
        </Typography>
        <Hidden mdDown>
          <TabMenu />
        </Hidden>
        <Hidden lgUp>
          <BurgerNav />
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
);


export default appBar;

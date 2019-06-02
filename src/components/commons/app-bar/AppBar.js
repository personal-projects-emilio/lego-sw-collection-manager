import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Toolbar,
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import { Link } from "react-router-dom";

const routes = [
  {path: '/', label: 'Home'},
  {path: '/minifigs', label: 'Minifigs'},
  {path: '/frames', label: 'Frames'},
]

export const appBar = props => (
  <AppBar position="sticky" color="default" elevation={0}>
    <Toolbar>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={props.classes.fullHeight}
      >
        <Typography variant="h6" color="inherit">
          Lego SW Collection Manager
        </Typography>
        <Tabs
          value={props.location.pathname}
          classes={{
            root: props.classes.fullHeight,
            flexContainer: props.classes.fullHeight
          }}
        >
          {routes.map(route => (
            <Tab
              key={`${route.label}-tab`}
              value={route.path}
              label={route.label}
              component={Link}
              to={route.path}
            />
          ))}
          {props.authenticate ? (
            <Tab
              value="/logout"
              label="Logout"
              onClick={props.logout}
            />
          ) : (
            <Tab
              value="/auth"
              label="Authentication"
              component={Link}
              to="/auth"
              onClick={() => props.setAuthRedirectPath(props.location.pathname)}
            />
          )}
        </Tabs>
      </Grid>
    </Toolbar>
  </AppBar>
);

appBar.propTypes = {
  classes: PropTypes.shape({
    fullHeight: PropTypes.string.isRequired
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  logout: PropTypes.func.isRequired,
  setAuthRedirectPath: PropTypes.func.isRequired,
  authenticate: PropTypes.string
};

export default appBar;

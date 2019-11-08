import React from "react";
import PropTypes from "prop-types";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
// import styles from './TabMenu.module.css';

export const TabMenu = props => (
  <Tabs
    value={props.location.pathname}
  >
    <Tab value="/" label="Home" component={Link} to="/" />
    <Tab
      value="/minifigs"
      label="Minifigs"
      component={Link}
      to="/minifigs"
    />
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
)

TabMenu.propTypes = {
  authenticate: PropTypes.string,
  logout: PropTypes.func.isRequired,
  setAuthRedirectPath: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default TabMenu;

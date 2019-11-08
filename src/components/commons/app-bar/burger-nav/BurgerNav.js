import React from "react";
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider'
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import styles from './BurgerNav.module.css';

export const BurgerNav = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { authenticate, logout, setAuthRedirectPath, location } = props;
  const { pathname } = location;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-menu' : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        <Icon>menu</Icon>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          component={Link}
          to="/"
          selected={pathname === "/"}
          classes={{
            selected: styles.selected,
            root: styles.root
          }}
        >
          Home
        </MenuItem>
        <Divider />
        <MenuItem
          component={Link}
          to="/minifigs"
          selected={pathname === "/minifigs"}
          classes={{
            selected: styles.selected,
            root: styles.root
          }}
        >
          Minifigs
        </MenuItem>
        <Divider />
        {authenticate ? (
          <MenuItem onClick={logout}>Logout</MenuItem>
        ) : (
            <MenuItem
              component={Link}
              to="/auth"
              onClick={() => setAuthRedirectPath(props.location.pathname)}
              selected={pathname === "/auth"}
              classes={{
                selected: styles.selected,
                root: styles.root
              }}
            >
              Authentication
            </MenuItem>
          )}
      </Popover>
    </>
  )
}

BurgerNav.propTypes = {
  authenticate: PropTypes.string,
  logout: PropTypes.func.isRequired,
  setAuthRedirectPath: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default BurgerNav;

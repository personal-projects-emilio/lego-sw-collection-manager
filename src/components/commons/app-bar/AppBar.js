import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Toolbar, AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const appBar = props => (
    <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
            <Grid container justify="space-between" alignItems="center" className={props.classes.fullHeight}>
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
                    <Tab value="/" label="Home" component={Link} to="/" />
                    <Tab value="/minifigs" label="Minifigs" component={Link} to="/minifigs" />
                </Tabs>
            </Grid>
        </Toolbar>
    </AppBar>
)

appBar.propTypes = {
    classes: PropTypes.shape({
        fullHeight: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    })
}


export default appBar;
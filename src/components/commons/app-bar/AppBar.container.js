import AppBar from './AppBar';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = () => ({
    fullHeight: {
        height: '100%'
    }
})

export default withRouter(withStyles(styles)(AppBar));
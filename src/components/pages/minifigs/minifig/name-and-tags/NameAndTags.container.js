import nameAndTags from './NameAndTags';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    button: {
        textTransform: 'none',
        minHeight: '20px',
        minWidth: '20px',
        maxWidth: '100%',
        padding: '3px 5px',
        margin: '0.4rem'
    }
})

export default withStyles(styles)(nameAndTags);
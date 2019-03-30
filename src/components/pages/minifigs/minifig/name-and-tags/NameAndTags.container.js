import nameAndTags from './NameAndTags';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    chip: {
        margin: '4px 2px',
        borderRadius: '12px',
        height: 'auto',
        padding: '6px 0'
    }
})

export default withStyles(styles)(nameAndTags);
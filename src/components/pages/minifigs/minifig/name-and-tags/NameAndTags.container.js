import nameAndTags from './NameAndTags';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {setTagSelected, setCharacNameSelected } from '../../../../../stores/minifigs-filter';

const styles = () => ({
    chip: {
        margin: '2px',
        borderRadius: '12px',
        height: 'auto',
        padding: '6px 0',
        maxWidth: '100%'
    },
    label: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'block'
    }
});

const mapStateToProps = state => ({
    tagSelected: state.minifigsFilter.tagSelected,
    characNameSelected: state.minifigsFilter.characNameSelected,
});

const mapDispatchToProps = dispatch => ({
    setTagSelected: tag => dispatch(setTagSelected(tag)),
    setCharacNameSelected: characName => dispatch(setCharacNameSelected(characName)),
});

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(nameAndTags));
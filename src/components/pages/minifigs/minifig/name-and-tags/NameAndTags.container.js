import nameAndTags from './NameAndTags';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {setTagSelected, setCharacNameSelected } from '../../../../../store/minifigs-filter';

const styles = () => ({
    chip: {
        margin: '4px 2px',
        borderRadius: '12px',
        height: 'auto',
        padding: '6px 0'
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
import Filters from './Filters';
import { connect } from 'react-redux';
import { setShow, setTagSelected, setCharacNameSelected } from '../../../../../stores/minifigs-filter';

const mapStateToProps = state => ({
    showOptions: state.minifigsFilter.options.show,
    show: state.minifigsFilter.show,
    tagSelected: state.minifigsFilter.tagSelected,
    characNameSelected: state.minifigsFilter.characNameSelected,
    tags: state.minifigs.tags,
    characNames: state.minifigs.characNames
});

const mapDispatchToProps = dispatch => ({
  setShow: show => dispatch(setShow(show)),
  setTag: tag => dispatch(setTagSelected(tag)),
  setCharacName: characName => dispatch(setCharacNameSelected(characName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);


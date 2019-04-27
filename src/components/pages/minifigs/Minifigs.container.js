import Minifigs from './Minifigs';
import { connect } from 'react-redux';
import { fetchMinifigs } from '../../../store/minifigs';
import { manageSearchParams, resetFilters } from '../../../store/minifigs-filter';

const mapStateToProps = state => ({
    minifigs: state.minifigs.minifigs,
    activePage: state.minifigsFilter.activePage,
    numberPerPage: state.minifigsFilter.numberPerPage,
    show: state.minifigsFilter.show,
    tagSelected: state.minifigsFilter.tagSelected,
    characNameSelected: state.minifigsFilter.characNameSelected
});

const mapDispatchToProps = dispatch => ({
    fetchMinifigs: () => dispatch(fetchMinifigs()),
    manageSearchParams: () => dispatch(manageSearchParams()),
    resetFilters: () => dispatch(resetFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Minifigs);


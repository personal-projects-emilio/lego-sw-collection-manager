import Minifigs from './Minifigs';
import { connect } from 'react-redux';
import { fetchMinifigs } from '../../../store/minifigs';
import { manageSearchParams } from '../../../store/minifigs-sorter';

const mapStateToProps = state => ({
    minifigs: state.minifigs.minifigs,
    activePage: state.minifigsSorter.activePage,
    numberPerPage: state.minifigsSorter.numberPerPage,
});

const mapDispatchToProps = dispatch => ({
    fetchMinifigs: () => dispatch(fetchMinifigs()),
    manageSearchParams: () => dispatch(manageSearchParams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Minifigs);


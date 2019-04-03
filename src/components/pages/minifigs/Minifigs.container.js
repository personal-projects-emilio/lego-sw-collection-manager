import Minifigs from './Minifigs';
import { connect } from 'react-redux';
import { fetchMinifigs } from '../../../store/minifigs'

const mapStateToProps = state => ({
    minifigs: state.minifigs.minifigs,
    activePage: state.minifigsSorter.activePage,
    numberPerPage: state.minifigsSorter.numberPerPage,
});

const mapDispatchToProps = dispatch => ({
    fetchMinifigs: () => dispatch(fetchMinifigs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Minifigs);


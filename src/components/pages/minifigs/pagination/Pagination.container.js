import Pagination from './Pagination';
import { connect } from 'react-redux';
import { setActivePage, setNumberPerPage } from '../../../../store/minifigs-sorter';

const mapStateToProps = state => ({
  activePage: state.minifigsSorter.activePage,
  numberPerPage: state.minifigsSorter.numberPerPage,
  nbPerPagesOptions: state.minifigsSorter.options.nbPerPages,
});

const mapDispatchToProps = dispatch => ({
  setActivePage: activePage => dispatch(setActivePage(activePage)),
  setNumberPerPage: nbPerPage => dispatch(setNumberPerPage(nbPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);


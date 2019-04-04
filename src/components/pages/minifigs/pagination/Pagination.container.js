import Pagination from './Pagination';
import withSizes from 'react-sizes'
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

const mapSizesToProps = ({ width }) => ({
  isSmall: width < 600,
})

export default withSizes(mapSizesToProps)(connect(mapStateToProps, mapDispatchToProps)(Pagination));


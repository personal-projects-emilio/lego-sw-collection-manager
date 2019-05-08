import Pagination from './Pagination';
import withSizes from 'react-sizes'
import { connect } from 'react-redux';
import { setActivePage, setNumberPerPage } from '../../../../stores/minifigs-filter';

const mapStateToProps = state => ({
  activePage: state.minifigsFilter.activePage,
  numberPerPage: state.minifigsFilter.numberPerPage,
  nbPerPagesOptions: state.minifigsFilter.options.nbPerPages,
});

const mapDispatchToProps = dispatch => ({
  setActivePage: activePage => dispatch(setActivePage(activePage)),
  setNumberPerPage: nbPerPage => dispatch(setNumberPerPage(nbPerPage))
});

const mapSizesToProps = ({ width }) => ({
  isSmall: width < 600,
})

export default withSizes(mapSizesToProps)(connect(mapStateToProps, mapDispatchToProps)(Pagination));


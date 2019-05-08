import Miscellaneous from './Miscellaneous';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    totalNumber: state.minifigs.totalNumber,
    numberOwned: state.minifigs.numberOwned,
    percentageOwned: state.minifigs.percentageOwned
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Miscellaneous);


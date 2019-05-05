import MinifigMenu from './MinifigMenu';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    totalNumber: state.minifigs.totalNumber,
    numberOwned: state.minifigs.numberOwned
});

export default connect(mapStateToProps, null)(MinifigMenu);


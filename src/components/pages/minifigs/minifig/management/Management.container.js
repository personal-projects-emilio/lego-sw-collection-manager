import Management from './Management';
import { connect } from 'react-redux';
import { togglePossession } from '../../../../../store/minifigs';

const mapDispatchToProps = dispatch => ({
  togglePossession: reference => dispatch(togglePossession(reference))
});

export default connect(null, mapDispatchToProps)(Management);

import Management from './Management';
import { connect } from 'react-redux';
import { togglePossession, deleteMinifig } from '../../../../../store/minifigs';

const mapDispatchToProps = dispatch => ({
  togglePossession: reference => dispatch(togglePossession(reference)),
  deleteMinifig: reference => dispatch(deleteMinifig(reference))
});

export default connect(null, mapDispatchToProps)(Management);


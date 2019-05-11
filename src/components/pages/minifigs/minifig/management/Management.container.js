import Management from './Management';
import { connect } from 'react-redux';
import { togglePossession, deleteMinifig } from '../../../../../stores/minifigs';
import { setEditMinifigForm} from '../../../../../stores/minifig-form';

const mapDispatchToProps = dispatch => ({
  togglePossession: reference => dispatch(togglePossession(reference)),
  deleteMinifig: reference => dispatch(deleteMinifig(reference)),
  setEditMinifigForm: minifig => dispatch(setEditMinifigForm(minifig))
});

export default connect(null, mapDispatchToProps)(Management);


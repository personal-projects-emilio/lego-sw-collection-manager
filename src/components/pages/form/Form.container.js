import Form from './Form';
import { connect } from 'react-redux';
import { updateInput } from '../../../stores/minifig-form'
const mapStateToProps = state => ({
  minifigForm: state.minifigForm.template
});

const mapDispatchToProps = dispatch => ({
  updateInput : (val, inputKey) => dispatch(updateInput(val, inputKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);


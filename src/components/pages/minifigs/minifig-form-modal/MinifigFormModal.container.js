import MinifigFormModal from "./MinifigFormModal";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updateInput, resetMinifigForm, submitMinifigForm } from "../../../../stores/minifig-form";

const mapStateToProps = state => ({
  template: state.minifigForm.template,
  formIsValid: state.minifigForm.formIsValid
});

const mapDispatchToProps = dispatch => ({
  updateInput: (val, inputKey) => dispatch(updateInput(val, inputKey)),
  resetMinifigForm: () => dispatch(resetMinifigForm()),
  submitMinifigForm: () => dispatch(submitMinifigForm())
});

const styles = () => ({
  paper: {
    padding: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80vh',
    overflow: 'auto'
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MinifigFormModal)
);

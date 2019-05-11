import MinifigFormModal from "./MinifigFormModal";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { updateInput, resetMinifigForm } from "../../../../stores/minifig-form";

const mapStateToProps = state => ({
  template: state.minifigForm.template
});

const mapDispatchToProps = dispatch => ({
  updateInput: (val, inputKey) => dispatch(updateInput(val, inputKey)),
  resetMinifigForm: () => dispatch(resetMinifigForm())
});

const styles = () => ({
  paper: {
    padding: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80vh',
    overflow: 'scroll'
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MinifigFormModal)
);

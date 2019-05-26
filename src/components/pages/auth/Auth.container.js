import Auth from "./Auth";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { updateAuthInput, authenticate } from "../../../stores/auth";

const mapStateToProps = state => ({
  template: state.auth.template,
  formIsValid: state.auth.formIsValid
});

const mapDispatchToProps = dispatch => ({
  updateInput: (val, inputKey) => dispatch(updateAuthInput(val, inputKey)),
  authenticate: () => dispatch(authenticate())
});

const styles = () => ({
  paper: {
    margin: '1rem',
    paddingBottom: '1rem'
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
);

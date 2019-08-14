import AppBar from "./AppBar";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, setAuthRedirectPath } from "../../../stores/auth";

const mapStateToProps = state => ({
  authenticate: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setAuthRedirectPath: path => dispatch(setAuthRedirectPath(path))
});

const styles = () => ({
  fullHeight: {
    height: "100%"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(AppBar)));

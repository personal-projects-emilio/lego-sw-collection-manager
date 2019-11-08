import BurgerNav from "./BurgerNav";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, setAuthRedirectPath } from "../../../../stores/auth";

const mapStateToProps = state => ({
  authenticate: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setAuthRedirectPath: path => dispatch(setAuthRedirectPath(path))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BurgerNav));

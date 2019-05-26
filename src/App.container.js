import App from './App';
import { connect } from 'react-redux';
import { authCheckState } from './stores/auth';

const mapDispatchToProps = dispatch => ({
  tryAutoSignup: () => dispatch(authCheckState()),
});

export default connect(null, mapDispatchToProps)(App);


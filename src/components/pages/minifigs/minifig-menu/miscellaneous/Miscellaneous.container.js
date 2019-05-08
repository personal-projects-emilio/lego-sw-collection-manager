import { withStyles } from '@material-ui/core';
import Miscellaneous from './Miscellaneous';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    totalNumber: state.minifigs.totalNumber,
    numberOwned: state.minifigs.numberOwned,
    percentageOwned: state.minifigs.percentageOwned,
    minifigs: state.minifigs.minifigs
});

const mapDispatchToProps = dispatch => ({
});

const styles = theme => ({
    button: {
      margin: theme.spacing.unit
    },
    icon: {
      marginLeft: theme.spacing.unit
    },
    linearProgress: {
      margin: `${theme.spacing.unit}px 0`
    },
  });

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Miscellaneous));


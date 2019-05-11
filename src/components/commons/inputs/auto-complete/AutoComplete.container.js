import AutoComplete from "./AutoComplete";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  input: {
    display: 'flex',
    padding: '10px',
  },
  paper: {
    position: 'absolute',
    zIndex: 99,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    textAlign: 'center'
  },
});

export default withStyles(styles)(AutoComplete);

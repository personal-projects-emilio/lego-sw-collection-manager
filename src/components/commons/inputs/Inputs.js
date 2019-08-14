import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import isEqual from "lodash.isequal";
import Switch from "./switch";
import TextField from "./textfield";
import AutoComplete from "./auto-complete";
import RadioButtons from "./radio-buttons";

export const inputs = props => {
  const { type, updateInput, value, className } = props;

  const inputChangeHandler = newValue => {
    !isEqual(newValue, value) && updateInput(newValue);
  };

  let inputElement = null;
  switch (type) {
    case "textfield":
      inputElement = <TextField {...props} inputChange={inputChangeHandler} />;
      break;
    case "autocomplete":
      inputElement = (
        <AutoComplete {...props} inputChange={inputChangeHandler} />
      );
      break;
    case "switch":
      inputElement = <Switch {...props} inputChange={inputChangeHandler} />;
      break;
      case "radiobuttons":
        inputElement = <RadioButtons {...props} inputChange={inputChangeHandler} />;
        break;
    default:
      inputElement = <span>Input not supported</span>;
  }
  return (
    <Grid item xs={12} className={className ? className : ''}>
      {inputElement}
    </Grid>
  );
};

inputs.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  updateInput: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  errorText: PropTypes.string,
  muiProps: PropTypes.object
};

export default inputs;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/lib/Creatable";
import isEqual from "lodash.isequal";
import {
  Control,
  Option,
  Menu,
  MultiValue,
  ValueContainer,
  NoOptionsMessage
} from "./components/Components";

export const AutoComplete = props => {
  const {
    config,
    value,
    inputChange,
    valid,
    touched,
    errorText,
    placeholder,
    classes,
    label,
    muiProps
  } = props;
  const [itemValue, setItemValue] = useState("");

  useEffect(() => {
    if (config.multi) {
      const newValue = value.map(value => ({ label: value, value }));
      !isEqual(newValue, itemValue) && setItemValue(newValue);
    } else {
      const newValue = value && { label: value, value: value };
      !isEqual(newValue, itemValue) && setItemValue(newValue);
    }
  }, [value, config.multi, itemValue]);

  const changeHandler = (val, _action) => {
    setItemValue(val);
    !config.multi && inputChange(val ? val.value : '');
    config.multi && inputChange(val.map(item => item.value));
  };
  return (
    <CreatableSelect
      classes={classes}
      isMulti={!!config.multi}
      options={config.options}
      isClearable
      onChange={changeHandler}
      value={itemValue}
      placeholder={placeholder}
      textFieldProps={{
        ...muiProps,
        label,
        error: !valid && touched,
        helperText: !valid && touched && errorText
      }}
      components={{
        Control,
        Option,
        Menu,
        MultiValue,
        ValueContainer,
        NoOptionsMessage
      }}
    />
  );
};
AutoComplete.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  config: PropTypes.shape({
    multi: PropTypes.bool,
    options: PropTypes.array
  }),
  inputKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  muiProps: PropTypes.object,
  classes: PropTypes.object
};

export default AutoComplete;

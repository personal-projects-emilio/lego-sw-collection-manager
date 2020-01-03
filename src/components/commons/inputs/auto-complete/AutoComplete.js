import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select'
import isEqual from "lodash.isequal";
import {
  Control,
  Option,
  Menu,
  MultiValue,
  ValueContainer,
  NoOptionsMessage
} from "./components/Components";
import { customStyles } from './Autocomplete.style';

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
    if (config.multi && value && Array.isArray(value)) {
      const newValue = value.map(value => ({ label: value, value }));
      !isEqual(newValue, itemValue) && setItemValue(newValue);
    } else {
      const newValue = value && { label: value, value };
      !isEqual(newValue, itemValue) && setItemValue(newValue);
    }
  }, [value, config.multi, itemValue]);

  const changeHandler = (val, _action) => {
    setItemValue(val ? val : '');
    if (config.multi) {
      inputChange(val ? val.map(item => item.value) : []);
    } else {
      inputChange(val ? val.value : '');
    }
  };

  const selectProps = {
    classes,
    styles: customStyles,
    isMulti: !!config.multi,
    options: config.options,
    isClearable: true,
    onChange: changeHandler,
    value: itemValue,
    placeholder,
    textFieldProps: {
      ...muiProps,
      label,
      error: !valid && touched,
      helperText: !valid && touched && errorText
    },
    components: {
      Control,
      Option,
      Menu,
      MultiValue,
      ValueContainer,
      NoOptionsMessage
    }
  }

  return !!config.creatable ? <CreatableSelect {...selectProps} /> : <Select {...selectProps} />;
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
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  errorText: PropTypes.string,
  muiProps: PropTypes.object,
  classes: PropTypes.object
};

export default AutoComplete;

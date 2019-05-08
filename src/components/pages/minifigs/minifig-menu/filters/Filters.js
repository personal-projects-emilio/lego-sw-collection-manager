import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField, MenuItem } from "@material-ui/core";
import styles from "./Filters.module.css";
import SelectField from "../../../../commons/inputs/selectfield";

export const filters = props => {
  const {
    showOptions,
    show,
    setShow,
    characNames,
    characNameSelected,
    setCharacName,
    resetCharacName,
    tags,
    tagSelected,
    setTag,
    resetTag
  } = props;

  const setShowHandler = e => {
    const value = e.target.value;
    value !== show && setShow(value);
  };
  return (
    <Grid container>
      <TextField
        id="select-show-filter"
        label="Show"
        select
        value={show}
        variant="outlined"
        fullWidth
        className={styles.Selectfield}
        onChange={setShowHandler}
      >
        {showOptions.map(option => (
          <MenuItem key={`${option}-selectfield-choice`} value={option}>
            {`${option[0].toUpperCase()}${option.slice(1)}`}
          </MenuItem>
        ))}
      </TextField>
      {characNames && (
        <SelectField
          value={characNameSelected}
          label="Character Name"
          options={characNames.map(charac => ({
            displayed: `${charac.name} (${charac.amount})`,
            value: charac.name
          }))}
          setValue={setCharacName}
          resetValue={resetCharacName}
        />
      )}
      {tags && (
        <SelectField
          value={tagSelected}
          label="Tag"
          options={tags.map(tag => ({
            displayed: `${tag.name} (${tag.amount})`,
            value: tag.name
          }))}
          setValue={setTag}
          resetValue={resetTag}
        />
      )}
    </Grid>
  );
};

filters.propTypes = {
  showOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setShow: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
  tagSelected: PropTypes.string,
  tags: PropTypes.array,
  setTag: PropTypes.func.isRequired,
  resetTag: PropTypes.func.isRequired,
  characNameSelected: PropTypes.string,
  characNames: PropTypes.array,
  setCharacName: PropTypes.func.isRequired,
  resetCharacName: PropTypes.func.isRequired
};

export default filters;

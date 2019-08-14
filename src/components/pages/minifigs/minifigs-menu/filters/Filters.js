import React from "react";
import PropTypes from "prop-types";
import SelectField from "../../../../commons/inputs/selectfield";
import Inputs from "../../../../commons/inputs";

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

  return (
    <>
      <Inputs
        type="radiobuttons"
        label="Show"
        value={show}
        updateInput={setShow}
        config={{
          row: true,
          options: showOptions
        }}
      />
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
    </>
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

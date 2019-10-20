import React from "react";
import PropTypes from "prop-types";
import Inputs from "../../../../commons/inputs";

export const filters = props => {
  const {
    showOptions,
    show,
    setShow,
    characNames,
    characNameSelected,
    setCharacName,
    tags,
    tagSelected,
    setTag,
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
        <Inputs
          type="autocomplete"
          value={characNameSelected}
          className="padding10rem"
          label="Character Name"
          placeholder="Filter by character name"
          config={{
            options: characNames.map(charac => ({
              label: `${charac.name} (${charac.amount})`,
              value: charac.name
            })),
          }}
          updateInput={setCharacName}
          muiProps={{
            variant: 'outlined',
            InputLabelProps: {
              shrink: true
            },
          }}
        />
      )}
      {tags && (
        <Inputs
          type="autocomplete"
          value={tagSelected}
          label="Tag"
          placeholder="Filter by tag"
          config={{
            options: tags.map(tag => ({
              label: `${tag.name} (${tag.amount})`,
              value: tag.name
            })),
          }}
          updateInput={setTag}
          muiProps={{
            variant: 'outlined',
            InputLabelProps: {
              shrink: true
            },
          }}
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
  characNameSelected: PropTypes.string,
  characNames: PropTypes.array,
  setCharacName: PropTypes.func.isRequired,
};

export default filters;

import React from "react";
import PropTypes from "prop-types";
import { Divider, Chip } from "@material-ui/core";

export const nameAndTags = props => {
  const { characterName, classes, tags, characNameSelected, tagSelected } = props;

  const characNameHandler = characName => {
    characterName !== characNameSelected && props.setCharacNameSelected(characName);
  }

  const tagHandler = tag => {
    tag !== tagSelected && props.setTagSelected(tag);
  }

  return (
    <>
      <Divider variant="fullWidth" />
      <Chip
        label={characterName}
        classes={{root: classes.chip}}
        clickable={characterName !== characNameSelected}
        color={characterName === characNameSelected ? "primary" : "default"}
        onClick={() => characNameHandler(characterName)}
      />
      {tags && tags.length > 0 && (
        <>
          <Divider variant="fullWidth" />
          {tags.sort().map(tag => (
            <Chip 
              key={`${characterName}-${tag}`}
              label={tag}
              classes={{root: classes.chip}}
              clickable={tag !== tagSelected}
              color={tag === tagSelected ? "primary" : "default"}
              onClick={() => tagHandler(tag)}
            />
          ))}
        </>
      )}
    </>
  );
};

nameAndTags.propTypes = {
  characterName: PropTypes.string.isRequired,
  characNameSelected: PropTypes.string,
  setCharacNameSelected: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  tagSelected: PropTypes.string,
  setTagSelected: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default nameAndTags;

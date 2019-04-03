import React from "react";
import PropTypes from "prop-types";
import { Divider, Chip } from "@material-ui/core";

export const nameAndTags = props => {
  const { characterName, classes, tags } = props;
  return (
    <>
      <Divider variant="fullWidth" />
      <Chip
        label={characterName}
        classes={{root: classes.chip}}
      />
      {tags && tags.length > 0 && (
        <>
          <Divider variant="fullWidth" />
          {tags.sort().map(tag => (
            <Chip 
              key={`${characterName}-${tag}`}
              label={tag}
              classes={{root: classes.chip}}
            />
          ))}
        </>
      )}
    </>
  );
};

nameAndTags.propTypes = {
  characterName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.object
};

export default nameAndTags;

import React from "react";
import PropTypes from "prop-types";
import { Divider, Button } from "@material-ui/core";

export const nameAndTags = props => {
  const { characterName, classes, tags } = props;
  return (
    <>
      <Divider variant="fullWidth" />
      <Button classes={{ root: classes.button }} variant="contained">
        {characterName}
      </Button>
      {tags.length > 0 && (
        <>
          <Divider variant="fullWidth" />
          {tags.map(tag => (
            <Button 
              key={`${characterName}-${tag}`} 
              classes={{ root: classes.button }}
              variant="contained"
            >
              {tag}
            </Button>
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

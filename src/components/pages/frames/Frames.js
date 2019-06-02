import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const frames = props => {
  const { frames, minifigs, fetchFrames, fetchMinifigs } = props;
  useEffect(() => {
    !minifigs && fetchMinifigs();
    !frames && fetchFrames();
  }, [])
  return <div></div>
}

frames.propTypes = {
  minifigs: PropTypes.object,
  frames: PropTypes.object,
  fetchMinifigs: PropTypes.func.isRequired,
  fetchFrames: PropTypes.func.isRequired,
};

export default frames;

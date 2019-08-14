import { Route } from "react-router";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../../commons/loader";
import { Paper, TextField, MenuItem } from "@material-ui/core";
import styles from "./Frames.module.css";

export const frames = props => {
  const { frames, minifigs, fetchFrames, fetchMinifigs, history } = props;
  const [selectedFrame, setSelectedFrame] = useState("");
  useEffect(() => {
    !minifigs && fetchMinifigs();
    !frames && fetchFrames();
  }, []);

  const selectFrameHandler = e => {
    const { value } = e.target;
    setSelectedFrame(value);
    history.push(`/frames/${value}`);
  };
  return minifigs && frames ? (
    <>
      <Paper className={styles.Paper}>
        <TextField
          id="select-frames-filter"
          label="Frames"
          select
          value={selectedFrame}
          variant="outlined"
          fullWidth
          onChange={selectFrameHandler}
        >
          {Object.keys(frames).map(frame => (
            <MenuItem key={`${frame}-selectfield-choice`} value={frame}>
              {frame}
            </MenuItem>
          ))}
        </TextField>
      </Paper>
      <Route exact path="/frames/:FRAME" />
    </>
  ) : (
    <Loader />
  );
};

frames.propTypes = {
  minifigs: PropTypes.object,
  frames: PropTypes.object,
  fetchMinifigs: PropTypes.func.isRequired,
  fetchFrames: PropTypes.func.isRequired
};

export default frames;

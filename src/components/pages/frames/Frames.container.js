import Frames from "./Frames";
import { connect } from "react-redux";
import { fetchMinifigs } from "../../../stores/minifigs";
import { fetchFrames } from "../../../stores/frames";

const mapStateToProps = state => ({
  minifigs: state.minifigs.minifigs,
  frames: state.frames.frames,
});

const mapDispatchToProps = dispatch => ({
  fetchMinifigs: () => dispatch(fetchMinifigs()),
  fetchFrames: () => dispatch(fetchFrames())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frames);

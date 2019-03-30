import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import Minifig from './minifig'
import Pagination from "./pagination";
import styles from './Minifigs.module.css';

export const minifigs = props => {
  // const [currentMinifigs, setCurrentMinifigs] = useState(null);
  useEffect(() => {
    !props.minifigs && props.fetchMinifigs()
  }, [])
  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid className={styles.pagination} item xs={12}><Pagination /></Grid>
      {/* <MinifigsSorter /> */}
      {/* <MinifigsList/> */}
      {props.minifigs && Object.keys(props.minifigs).map((minifig, i) =>
         i < 12 && <Grid item xs={4} md={3} lg={2} key={minifig} ><Minifig reference={minifig} details={props.minifigs[minifig]}/></Grid>)}
      <Grid className={styles.pagination} item xs={12}><Pagination /></Grid>
    </Grid>
  )
}

minifigs.propTypes = {
  minifigs: PropTypes.object
}

export default minifigs;

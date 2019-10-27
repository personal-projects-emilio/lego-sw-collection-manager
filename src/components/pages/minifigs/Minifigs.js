import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Button } from "@material-ui/core";
import Minifig from "./minifig";
import Pagination from "./pagination";
import styles from "./Minifigs.module.css";
import Loader from "../../commons/loader";
import MinifigsMenu from "./minifigs-menu";
import MinifigFormModal from "./minifig-form-modal";
import { getFilteredMinifigs } from "../../../services/minifigs";

export const Minifigs = props => {
  const {
    minifigs,
    activePage,
    numberPerPage,
    tagSelected,
    characNameSelected,
    show,
    fetchMinifigs,
    manageSearchParams,
    resetFilters
  } = props;
  const [currentMinifigs, setCurrentMinifigs] = useState([]);
  const [total, setTotal] = useState(0);
  const [begin, setBegin] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    !minifigs && fetchMinifigs();
    manageSearchParams();
    return () => {
      resetFilters();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (minifigs) {
      const filteredMinifigsList = getFilteredMinifigs(minifigs, show, characNameSelected, tagSelected)
      setCurrentMinifigs(filteredMinifigsList);
      setTotal(filteredMinifigsList.length);
    }
  }, [minifigs, tagSelected, characNameSelected, show]);

  useEffect(() => {
    const newBegin = (activePage - 1) * numberPerPage;
    newBegin !== begin && setBegin(newBegin);
    const newEnd = newBegin + numberPerPage;
    newEnd !== end && setEnd(newEnd);
  }, [activePage, begin, end, numberPerPage]);

  return minifigs ? (
    <Grid
      container
      className={styles.center}
      justify="center"
      alignItems="stretch"
    >
      <MinifigFormModal />
      <Grid item xs={12}>
        <MinifigsMenu />
      </Grid>
      {currentMinifigs.length > 0 ? (
        <>
          <Grid item xs={12}>
            <Pagination total={total} />
          </Grid>
          {currentMinifigs.slice(begin, end).map(minifig => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={minifig.reference}>
              <Minifig reference={minifig.reference} details={minifig} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Pagination total={total} />
          </Grid>
        </>
      ) : (
          <Typography align="center" variant="h6">
            <p>There are no minifigs with those filters</p>
            <Button variant="contained" onClick={props.resetFilters}>
              Reset filters
          </Button>
          </Typography>
        )}
    </Grid>
  ) : (
      <Loader />
    );
};

Minifigs.propTypes = {
  minifigs: PropTypes.object,
  activePage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  fetchMinifigs: PropTypes.func.isRequired,
  manageSearchParams: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
  tagSelected: PropTypes.string,
  characNameSelected: PropTypes.string,
  resetFilters: PropTypes.func.isRequired
};

export default Minifigs;
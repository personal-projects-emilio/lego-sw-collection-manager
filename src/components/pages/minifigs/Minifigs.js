import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { Grid } from "@material-ui/core"
import Minifig from './minifig'
import Pagination from "./pagination"
import styles from './Minifigs.module.css'

export const minifigs = props => {
  const {minifigs, activePage, numberPerPage } = props
  const [currentMinifigs, setCurrentMinifigs] = useState(null)
  const [total, setTotal] = useState(0)
  const [ begin, setBegin ] = useState(null)
  const [ end, setEnd ] = useState(null)

  useEffect(() => {
    !minifigs && props.fetchMinifigs()
  }, [])

  useEffect(() => {
    // We will check if the tag and character name exist
    // so we need the minifigs to manage the search params
    minifigs && props.manageSearchParams();
  }, [minifigs])

  useEffect(() => {
    if (minifigs) {
      const minifigsList = Object.keys(minifigs).filter((minifig, i) => {
        // we will manage the sort by filter here
        return minifig
      })
      setCurrentMinifigs(minifigsList)
      setTotal(minifigsList.length)
    }  
  }, [minifigs /*, tagSelected, characNameSelected, show*/ ])

  useEffect(() => {
    const newBegin = (activePage-1) * numberPerPage
    newBegin !== begin && setBegin(newBegin)
    const newEnd = newBegin + numberPerPage
    newEnd !== end && setEnd(newEnd)
  }, [activePage, numberPerPage])
  
  return (
    <Grid container className={styles.center} justify="center" alignItems="stretch">
      <Pagination total={total} />
      {/* <MinifigsSorter /> */}
      {/* should show a loader when currentMinifigs
      is null and a message when it's an empty array */}
      {currentMinifigs && currentMinifigs.slice(begin, end).map((minifig, i) => (
        <Grid item xs={4} md={3} lg={2} key={minifig}>
          <Minifig reference={minifig} details={minifigs[minifig]}/>
        </Grid>
      ))}
      <Pagination total={total} />
    </Grid>
  )
}

minifigs.propTypes = {
  minifigs: PropTypes.object,
  activePage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  fetchMinifigs: PropTypes.func.isRequired,
  manageSearchParams: PropTypes.func.isRequired,
}

export default minifigs

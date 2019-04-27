import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { Grid } from "@material-ui/core"
import Minifig from './minifig'
import Pagination from "./pagination"
import styles from './Minifigs.module.css'

export const minifigs = props => {
  const {minifigs, activePage, numberPerPage, tagSelected, characNameSelected, show } = props
  const [currentMinifigs, setCurrentMinifigs] = useState(null)
  const [total, setTotal] = useState(0)
  const [ begin, setBegin ] = useState(null)
  const [ end, setEnd ] = useState(null)

  useEffect(() => {
    !minifigs && props.fetchMinifigs()
    props.manageSearchParams();
    return () => {
      props.resetFilters();
    }
  }, [])

  useEffect(() => {
    if (minifigs) {
      const minifigsList = Object.keys(minifigs).filter(minifigRef => {
        const minifig = minifigs[minifigRef]
        const possessed = minifig.possessed;
        // First we check the show filter
        if (show === 'all' || (show ==='owned' && possessed)
          || (show === 'missing' && !possessed)) {
            // Then we check the character name and tag filter
          return characNameSelected ? characNameSelected === minifig.characterName
            : tagSelected && minifig.tags ? minifig.tags.includes(tagSelected)
            : !characNameSelected && !tagSelected
        } else {return false}
      })
      setCurrentMinifigs(minifigsList)
      setTotal(minifigsList.length)
    }  
  }, [minifigs, tagSelected, characNameSelected, show])

  useEffect(() => {
    const newBegin = (activePage-1) * numberPerPage
    newBegin !== begin && setBegin(newBegin)
    const newEnd = newBegin + numberPerPage
    newEnd !== end && setEnd(newEnd)
  }, [activePage, numberPerPage])
  
  return (
    <Grid container className={styles.center} justify="center" alignItems="stretch">
      {currentMinifigs && <Pagination total={total} />}
      {/* <minifigsFilter /> */}
      {/* should show a loader when currentMinifigs
      is null and a message when it's an empty array */}
      {currentMinifigs && currentMinifigs.slice(begin, end).map(minifig => (
        <Grid item xs={4} md={3} lg={2} key={minifig}>
          <Minifig reference={minifig} details={minifigs[minifig]}/>
        </Grid>
      ))}
      {currentMinifigs && <Pagination total={total} />}
    </Grid>
  )
}

minifigs.propTypes = {
  minifigs: PropTypes.object,
  activePage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  fetchMinifigs: PropTypes.func.isRequired,
  manageSearchParams: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
  tagSelected: PropTypes.string,
  characNameSelected: PropTypes.string,
  resetFilters: PropTypes.func.isRequired
}

export default minifigs

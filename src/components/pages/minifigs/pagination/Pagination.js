import React from "react";
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';
import Select from 'rc-select';
import locale from 'rc-pagination/lib/locale/en_US';
import './rc-pagination.css';
import 'rc-select/assets/index.css';
import { Grid } from "@material-ui/core";

export const pagination = props => {
  const { activePage, setActivePage } = props;

  const sizeHandler = (current, pageSize) => {
    activePage !== current && setActivePage(current);
    props.setNumberPerPage(pageSize);
  }

  const totalHandler = (total, range) => {
    if (total === 0) {
      return null
    } else if (total <= range[1] && range[0] === 1) {
      return `${range[0]} - ${range[1]} minifigs`
    } else {
      return `${range[0]} - ${range[1]} of ${total} minifigs`
    }
  }

  return (
    <Grid item xs={12}>
      <Pagination
        //active page
        current={props.activePage}
        onChange={props.setActivePage}
        // Nb per page options
        showSizeChanger={props.total > props.nbPerPagesOptions[0]}
        pageSizeOptions={props.nbPerPagesOptions}
        onShowSizeChange={sizeHandler}
        selectComponentClass={Select}
        pageSize={props.numberPerPage}
        locale={locale}
        // Total
        showTotal={totalHandler}
        total={props.total}
        // Responsive
        simple={props.isSmall}
      />
    </Grid>
  )
}

pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  nbPerPagesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActivePage: PropTypes.func.isRequired,
  setNumberPerPage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  isSmall: PropTypes.bool.isRequired
}

export default pagination;

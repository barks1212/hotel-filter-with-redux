import React from "react";
import { connect } from "react-redux";

import classes from "./sidebar.css";

import * as actionTypes from "../../store/actions";

import Aux from "../../hoc/Aux";
import SidebarTitle from "../../components/SidebarContent/Title";
import Checkbox from "../../components/SidebarContent/CheckBox";
import FilterReset from "../../components/SidebarContent/FilterReset";

import filtersToArray from "./Utils/filtersToArray";

class SideBar extends React.Component {
  render() {
    const { hotelFilters } = this.props;
    const filters = filtersToArray(hotelFilters).map(filter => {
      return (
        <Checkbox
          checked={hotelFilters[filter]}
          filter={filter}
          filterHotels={() => this.props.filterHotels(filter)}
        />
      );
    });

    let filterReset;

    for (let key in hotelFilters) {
      if (hotelFilters[key])
        filterReset = <FilterReset clearFilters={this.props.clearFilters} />;
    }

    return (
      <Aux>
        <div className={classes.SideBar}>
          <SidebarTitle />
          <div className={classes.SideBarContent}>
            <ul style={{ height: "auto" }}>{filters}</ul>
            {filterReset}
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.hotelList,
    hotelFilters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterHotels: fac =>
      dispatch({ type: actionTypes.FILTER_HOTELS, fac: fac }),
    clearFilters: () => dispatch({ type: actionTypes.CLEAR_FILTERS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

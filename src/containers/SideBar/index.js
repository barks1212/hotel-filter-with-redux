import React from "react";
import { connect } from "react-redux";

import classes from "./sidebar.css";

import * as actionTypes from "../../store/actions";

import Aux from "../../hoc/Aux";
import SidebarTitle from "../../components/SidebarContent/Title";
import Checkbox from "../../components/SidebarContent/CheckBox";

import filtersToArray from "./Utils/filtersToArray";

class SideBar extends React.Component {
  render() {
    const { hotelFilters } = this.props;
    const filters = filtersToArray(hotelFilters).map(filter => {
      return (
        <Checkbox
          filter={filter}
          filterHotels={() => this.props.filterHotels(filter)}
        />
      );
    });

    return (
      <Aux>
        <div className={classes.SideBar}>
          <SidebarTitle />
          <div className={classes.SideBarContent}>
            <ul>{filters}</ul>
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
    filterHotels: fac => dispatch({ type: actionTypes.FILTER_HOTELS, fac: fac })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

import React from "react";
import { connect } from "react-redux";

import classes from "./sidebar.css";

import Aux from "../../hoc/Aux";
import SidebarTitle from "../../components/SidebarContent/Title";
import Checkbox from "../../components/SidebarContent/CheckBox";

import filtersToArray from "./Utils/filtersToArray";

class SideBar extends React.Component {
  render() {
    const { hotelFilters } = this.props;
    const filters = filtersToArray(hotelFilters).map(filter => {
      return <Checkbox filter={filter} />;
    });

    return (
      <Aux>
        <div className={classes.SideBar}>
          <SidebarTitle />
          <div className={classes.SideBarContent}>
            <ul>{filters}</ul>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
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

export default connect(mapStateToProps)(SideBar);

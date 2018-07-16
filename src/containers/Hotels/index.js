import React from "react";
import { connect } from "react-redux";

import classes from "./Hotels.css";

import Aux from "../../hoc/Aux";
import Hotel from "../../components/Hotel";
import Sorter from "../../components/Sorter";

import * as actionTypes from "../../store/actions";

class Hotels extends React.Component {
  render() {
    const { hotels } = this.props;
    return (
      <Aux>
        <ul className={classes.Hotels}>
          <Sorter sort={this.props.srt} sortHotels={this.props.sortHotels} />
          {hotels.map(hotel => <Hotel hotel={hotel} />)}
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.hotelList,
    srt: state.sort,
    hotelFilters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortHotels: sort => dispatch({ type: actionTypes.SORT_HOTELS, sort: sort })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);

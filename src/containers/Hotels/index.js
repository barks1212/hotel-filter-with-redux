import React from "react";
import { connect } from "react-redux";

import classes from "./Hotels.css";

import Aux from "../../hoc/Aux";
import Hotel from "../../components/Hotel";

import * as actionTypes from "../../store/actions";

class Hotels extends React.Component {
  render() {
    const { hotels } = this.props;
    return (
      <Aux>
        <h2 className={classes.Title}>Search Results</h2>
        <ul className={classes.Hotels}>
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
    filterHotels: fac =>
      dispatch({ type: actionTypes.FILTER_HOTELS, facility: fac })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);

import React from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux";

import * as actionTypes from "../../store/actions";

class Hotels extends React.Component {
  render() {
    return (
      <Aux>
        <p>yoyoyoyoyo</p>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);

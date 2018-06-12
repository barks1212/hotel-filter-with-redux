import React from "react";
import PropTypes from "prop-types";

import classes from "./toggle.css";

const drawerToggle = props => (
  <div className={classes.Toggle}>
    <div />
    <div />
    <div />
  </div>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default drawerToggle;

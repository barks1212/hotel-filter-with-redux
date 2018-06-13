import React from "react";

import classes from "./facility.css";

import toTitleCase from "./utils/toTitleCase";

const facility = props => (
  <span className={classes.Facility}>
    <li>{toTitleCase(props.facility)}</li>
  </span>
);

export default facility;

import React from "react";

import classes from "./filterReset.css";

const filterReset = props => (
  <button
    className={classes.FilterReset}
    onClick={props.clearFilters}
    type="submit"
  >
    Reset Filters
  </button>
);

export default filterReset;

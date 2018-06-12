import React from "react";

import classes from "./rowWrapper.css";

const rowWrapper = props => (
  <div className={classes.RowWrapper}>{props.children}</div>
);

export default rowWrapper;

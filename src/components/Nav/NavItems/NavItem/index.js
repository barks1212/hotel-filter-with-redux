import React from "react";

import classes from "./NavItem.css";

const navItem = props => (
  <li className={classes.NavItem}>
    <a href="/">{props.children}</a>
  </li>
);

export default navItem;

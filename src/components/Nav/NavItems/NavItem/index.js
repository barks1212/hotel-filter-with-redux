import React from "react";

import classes from "./NavItem.css";

const navItem = props => <li className={classes.NavItem}>{props.children}</li>;

export default navItem;

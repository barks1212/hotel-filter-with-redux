import React from "react";

import classes from "./NavItems.css";

import NavItem from "./NavItem";

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem>About</NavItem>
    <NavItem>Contact</NavItem>
  </ul>
);

export default navItems;

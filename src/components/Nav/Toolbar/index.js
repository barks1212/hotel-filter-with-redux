import React from "react";

import classes from "./Toolbar.css";

import NavItems from "../NavItems";
import Logo from "../../Logo";
import Toggle from "../SideDrawer/Toggle";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Toggle />
    <div className={classes.Logo}>
      <a href="/">
        <Logo />
      </a>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;

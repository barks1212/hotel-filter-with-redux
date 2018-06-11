import React from "react";

import classes from "./Toolbar.css";

import NavItems from "../NavItems";
import Logo from "../../Logo";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;

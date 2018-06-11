import React from "react";

import classes from "./layout.css";

import Aux from "../Aux";
import Toolbar from "../../components/Nav/Toolbar";

class Layout extends React.Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

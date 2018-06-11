import React from "react";

import classes from "./layout.css";

import Aux from "../Aux";

class Layout extends React.Component {
  render() {
    return (
      <Aux>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

import React from "react";

import classes from "./layout.css";

import Aux from "../Aux";
import Toolbar from "../../components/Nav/Toolbar";
import Footer from "../../components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;

import React from "react";

import classes from "./sidebar.css";

import Aux from "../../hoc/Aux";

class SideBar extends React.Component {
  render() {
    return (
      <Aux>
        <div className={classes.SideBar}>
          <div className={classes.SideBarContent}>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
            <h3>sidebar</h3>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SideBar;

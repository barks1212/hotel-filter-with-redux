import React from "react";

import Logo from "../../assets/desktop-logo.png";
import mobileLogo from "../../assets/mobile-logo.png";
import Aux from "../../hoc/Aux";

import classes from "./Logo.css";

const logo = props => (
  <Aux>
    <div className={classes.Logo}>
      <img src={Logo} alt="laterooms-desktop" />
    </div>
    <div className={classes.MobileLogo}>
      <img src={mobileLogo} alt="laterooms mobile" />
    </div>
  </Aux>
);

export default logo;

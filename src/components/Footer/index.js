import React from "react";

import classes from "./footer.css";

import dummyLinks from "./DummyLinks";

const footer = () => (
  <div className={classes.Footer}>
    <ul>
      {dummyLinks.map(link => (
        <a href="/">
          <li>{link}</li>
        </a>
      ))}
    </ul>
  </div>
);

export default footer;

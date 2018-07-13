import React from "react";

import classes from "./checkbox.css";

import toTitleCase from "../../../Utils/toTitleCase";

const checkbox = props => {
  return (
    <div className={classes.Checkbox}>
      <li>
        <input
          className={classes.Input}
          type="checkbox"
          value={props.filter}
          onChange={props.filterHotels}
          id="searchFilter"
        />
        <span className={classes.Faker} />
        <label for="searchFilter">{toTitleCase(props.filter)}</label>
      </li>
    </div>
  );
};

export default checkbox;

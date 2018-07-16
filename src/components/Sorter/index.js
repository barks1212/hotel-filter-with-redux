import React from "react";

import classes from "./sorter.css";

const sorter = props => {
  return (
    <div className={classes.Sorter}>
      Sort by:
      <button
        className={classes.Button}
        onClick={() => props.sortHotels("asc")}
        type="submit"
      >
        Ascending
      </button>
      <button
        className={classes.Button}
        onClick={() => props.sortHotels("desc")}
        type="submit"
      >
        Descending
      </button>
    </div>
  );
};

export default sorter;

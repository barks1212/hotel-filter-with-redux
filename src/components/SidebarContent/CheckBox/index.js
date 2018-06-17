import React from "react";

import toTitleCase from "../../../Utils/toTitleCase";

const checkbox = props => {
  const filterName = Object.keys(props.filter)[0];
  const filterValue = Object.values(props.filter)[0];
  return (
    <div>
      <li>
        <input type="checkbox" value={filterName} id="searchFilter" />
        <label for="searchFilter">{toTitleCase(filterName)}</label>
      </li>
    </div>
  );
};

export default checkbox;

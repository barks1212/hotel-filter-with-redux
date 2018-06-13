import React from "react";

import classes from "./Hotel.css";

import Facility from "./Facility";

const hotel = props => {
  const stars = new Array(props.hotel.StarRating)
    .fill(true)
    .map((element, index) => {
      return (
        <i key={index} className="fa fa-star" id="stars" aria-hidden="true" />
      );
    });

  const { Name, Facilities, Image, Price } = props.hotel;
  return (
    <li className={classes.Hotel}>
      <span className={classes.HotelCard}>
        {Name}
        <img src={Image} alt={Name} />
        <span>{stars}</span>
        <span>
          <p>1 Night</p>
          <h4>{`£${Price}`}</h4>
        </span>
      </span>
      <div className={classes.Facilities}>
        <ul>{Facilities.map(fac => <Facility facility={fac} />)}</ul>
      </div>
    </li>
  );
};

export default hotel;

import React from "react";

import classes from "./Hotel.css";

import starRating from "./utils/stars";

const hotel = props => {
  const stars = starRating(props.hotel.starRating);
  const { Name, Facilities, Image, Price } = props.hotel;
  return (
    <li className={classes.Hotel}>
      <span className={classes.HotelCard}>
        {Name}
        <img src={Image} alt={Name} />
        <span>
          <p>1 Night</p>
          <h4>{`£${Price}`}</h4>
        </span>
      </span>
    </li>
  );
};

export default hotel;

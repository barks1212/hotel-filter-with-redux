import React from "react";

function starRating(rating) {
  new Array(rating).fill(true).map((element, index) => {
    return (
      <i key={index} className="fa fa-star" id="stars" aria-hidden="true" />
    );
  });
}

export default starRating;

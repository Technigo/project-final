import React, { useState } from "react";
// import emptyStar from "/star-regular.svg";
// import filledStar from "/star-solid.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";



const StarRating = ({ totalStars = 5, selectedStars, setSelectedStars }) => {


  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

const Star = ({ filled, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={filled ? filledStar : emptyStar}
      onClick={onClick}
          style={filled ? {color: "gold" } : { color: "grey"}}
          className="cursor-pointer hover:opacity-75 text-main-yellow"
    />
  );
};

  return (
    <>
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            filled={index < selectedStars}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;

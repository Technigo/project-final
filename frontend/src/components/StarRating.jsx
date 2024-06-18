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
          style={filled ? {color: "gold" } : { color: "white"}}
          className="cursor-pointer hover:opacity-75 text-main-yellow"
    />
  );
};

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            filled={index < selectedStars}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <p className="text-center">
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;

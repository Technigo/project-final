import React from "react";

export const ProductCard = ({ image_url, name, price }) => {
  return (
    <div className="product-card">
      <img src={image_url} alt="{name}" />
      <h2>{name}</h2>
      <h3>{price}SEK</h3>
    </div>
  );
};

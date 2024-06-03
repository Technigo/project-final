import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ id, image_url, name, price }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img className="product-image" src={image_url} alt={name} />
        <h6>{name}</h6>
        <h6>{price}SEK</h6>
      </Link>
    </div>
  );
};

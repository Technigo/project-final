import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../common/ReusableComponents/Image/Image";
import "./ProductCard.css";

export const ProductCard = ({ id, image_url, name, price }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <Image src={image_url} alt={name} className="all-products" />
        <div className="product-card-text">
          <h6>{name}</h6>
          <h6>{price}SEK</h6>
        </div>
      </Link>
    </div>
  );
};

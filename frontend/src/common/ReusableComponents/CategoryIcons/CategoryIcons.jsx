import accessories from "/assets/icons/accessories.svg";
import bottoms from "/assets/icons/bottoms.svg";
import dresses from "/assets/icons/dresses.svg";
import tops from "/assets/icons/tops.svg";
import { NavLink } from "react-router-dom";

import { Image } from "../Image/Image";

import "./CategoryIcons.css";

const categoryicons = [
  {
    src: tops,
    alt: "Tops-icon",
    className: "category-icon",
    text: "Tops",
    category: "tops",
  },
  {
    src: bottoms,
    alt: "Bottoms-icon",
    className: "category-icon",
    text: "Bottoms",
    category: "bottoms",
  },
  {
    src: dresses,
    alt: "Dresses-icon",
    className: "category-icon",
    text: "Dresses",
    category: "dresses",
  },
  {
    src: accessories,
    alt: "Accessories-icon",
    className: "category-icon",
    text: "Accessories",
    category: "accessories",
  },
];

export const CategoryIcons = ({ variant }) => {
  return (
    <div className={`category-icons-wrapper ${variant}`}>
      <h2 className="category-icons-h3">Shop by category</h2>
      <div className="category-icons">
        {categoryicons.map((categoryicon, index) => (
          <NavLink
            key={index}
            to={`/products/category/${categoryicon.category}`}
            className="category-icon"
          >
            <div className={`category-icon-background ${variant}`}>
              <Image
                src={categoryicon.src}
                alt={categoryicon.alt}
                className={categoryicon.className}
              />
            </div>
            <p className="category-icon-text">{categoryicon.text}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

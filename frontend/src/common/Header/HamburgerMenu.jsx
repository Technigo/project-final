import CrossIcon from "/assets/icons/cross.svg";
import HamburgerIcon from "/assets/icons/hamburger.svg";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import { Image } from "../ReusableComponents/Image/Image";

import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state)}
        customBurgerIcon={
          !isOpen ? (
            <Image
              src={HamburgerIcon}
              alt="Hamburger icon"
              className="hamburger-icon"
            />
          ) : null
        }
        customCrossIcon={
          isOpen ? (
            <Image src={CrossIcon} alt="Close icon" className="cross-icon" />
          ) : null
        }
      >
        <ul className="menu-categories">
          <li>
            <h5>
              <NavLink to="/products" end onClick={closeMenu}>
                All products
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/tops" onClick={closeMenu}>
                Tops
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/bottoms" onClick={closeMenu}>
                Bottoms
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/dresses" onClick={closeMenu}>
                Dresses
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/accessories" onClick={closeMenu}>
                Accessories
              </NavLink>
            </h5>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

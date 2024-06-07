import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Image } from "../ReusableComponents/Image/Image";
import "./HamburgerMenu.css";
import HamburgerIcon from "./hamburger.svg";
import CrossIcon from "./cross.svg";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div id="outer-container">
      <Menu
        isOpen={isOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={
          <Image
            src={HamburgerIcon}
            alt="Hamburger icon"
            className="hamburger-icon"
          />
        }
        customCrossIcon={
          <Image src={CrossIcon} alt="Close icon" className="cross-icon" />
        }
        // isOpen={isOpen}
        // onStateChange={(state) => handleStateChange(state)}
        // customBurgerIcon={
        //   isOpen ? (
        //     <Image
        //       src={CrossIcon}
        //       alt="Close icon"
        //       className="hamburger-icon"
        //     />
        //   ) : (
        //     <Image
        //       src={HamburgerIcon}
        //       alt="Hamburger icon"
        //       className="hamburger-icon"
        //     />
        //   )
        // }
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
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

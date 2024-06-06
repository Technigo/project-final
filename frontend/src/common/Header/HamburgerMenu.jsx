import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Image } from "../ReusableComponents/Image/Image";
import "./HamburgerMenu.css";
import HamburgerIcon from "./hamburger.svg";

export const HamburgerMenu = () => {
  return (
    <Menu
      customBurgerIcon={
        <Image
          src={HamburgerIcon}
          alt="Hamburger icon"
          className="hamburger-icon"
        />
      }
    >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/services">
        Services
      </a>
    </Menu>
  );
};

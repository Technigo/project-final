import { useRef } from "react";
import { NavLink } from "react-router-dom";
import glimLogo from "/glimSmall.svg";
import shoppingCart from "/cart-shopping-solid.svg";
import userIcon from "/user-solid.svg";
import burgerMenu from "/bars-solid.svg";
import xMark from "/square-xmark-solid.svg";

//If signed in Sign in should display username/firstname

export const Navigation = () => {
  const navRef = useRef();
  const btnRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("hidden");
    btnRef.current.classList.toggle("invisible");
  };

  return (
    <nav className="grid grid-cols-3 bg-main-red justify-between">
      <div className="left-nav flex">
        <NavLink to="/profile" className="text-white m-2">
          <img src={userIcon} alt="Profile" className="h-4 tablet:hidden" />
          <p className="font-body text-white font-extrabold text-lg hidden tablet:block">
            Sign In
          </p>
        </NavLink>
        <NavLink to="/cart" className="text-white tablet:hidden">
          <img
            src={shoppingCart}
            alt="Shopping cart"
            className="h-4 m-2 tablet:h-6"
          />
        </NavLink>
      </div>
      <div className="center-nav flex m-auto">
        <NavLink to="/" className="text-white">
          <img className="w-40 my-4" src={glimLogo} alt="glim logo" />
        </NavLink>
      </div>
      <div className="right-nav flex flex-row justify-end">
        <NavLink to="/cart" className="text-white">
          <img
            src={shoppingCart}
            alt="Shopping cart"
            className="h-6 m-2 hidden tablet:block"
          />
        </NavLink>

        <div
          className="hidden absolute top-0 right-0 flex-col text-right  p-4 rounded-bl-lg text-white bg-strong-red"
          ref={navRef}
        >
          <button className="" onClick={showNavbar}>
            <img src={xMark} alt="Menu" className="h-4" />
          </button>
          <NavLink className="nav-link" to="/now_playing">
            <p className="my-4">Profile</p>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <p>Products</p>
          </NavLink>
          <NavLink className="nav-link" to="/about">
            <p>About us</p>
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            <p className="my-4">Your cart</p>
          </NavLink>
        </div>
        <button ref={btnRef} className="flex" onClick={showNavbar}>
          <img
            src={burgerMenu}
            alt="Menu"
            className="h-4 m-2 justify-start tablet:h-6"
          />
        </button>
      </div>
    </nav>
  );
};

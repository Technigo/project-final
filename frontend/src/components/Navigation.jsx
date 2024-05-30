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
    btnRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="grid grid-cols-3 bg-main-red justify-between">
      <div className="left-nav flex">
        <NavLink to="/profile" className="text-white">
          <img src={userIcon} alt="Profile" className="h-4 m-2 laptop:hidden" />
          <p className="font-body text-white font-extrabold text-lg hidden laptop:block">
            Sign In
          </p>
        </NavLink>
        <NavLink to="/cart" className="text-white">
          <img src={shoppingCart} alt="Shopping cart" className="h-4 m-2" />
        </NavLink>
      </div>
      <div className="center-nav flex m-auto">
        <NavLink to="/" className="text-white">
          <img className="w-40 my-4" src={glimLogo} alt="glim logo" />
        </NavLink>
      </div>
      <div className="right-nav flex flex-row-reverse">
        <NavLink to="/cart" className="text-white">
          <img src={shoppingCart} alt="Shopping cart" className="w-6 hidden" />
        </NavLink>

        <NavLink to="/products" className="text-white hidden">
          <p>Products</p>
        </NavLink>

        {/* <img src={burgerMenu} alt="Menu" className="h-4 m-2" /> */}
        <div>
          <div className="hidden" ref={navRef}>
            <NavLink className="nav-link" to="/now_playing">
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Your cart
            </NavLink>
            <button className="" onClick={showNavbar}>
              <img src={xMark} alt="Menu" className="h-4 m-2" />
            </button>
          </div>
          <button ref={btnRef} className="" onClick={showNavbar}>
            <img src={burgerMenu} alt="Menu" className="h-4 m-2" />
          </button>
        </div>
      </div>
    </nav>
  );
};

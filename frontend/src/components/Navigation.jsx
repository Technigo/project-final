import { NavLink } from "react-router-dom";
import glimLogo from "/glimSmall.svg";
import shoppingCart from "/cart-shopping-solid.svg";
import userIcon from "/user-solid.svg";
import burgerMenu from "/bars-solid.svg";

//If signed in Sign in should display username/firstname

export const Navigation = () => {
  return (
    <nav className="flex bg-main-red justify-between">
      <div className="left-nav flex">
        <NavLink to="/profile" className="text-white">
          <img
            src={userIcon}
            alt="Profile"
            className="h-10 m-2 laptop:hidden"
          />
          <p className="font-body text-white font-extrabold text-lg hidden laptop:block">
            Sign In
          </p>
        </NavLink>
        <NavLink to="/cart" className="text-white">
          <img src={shoppingCart} alt="Shopping cart" className="h-10 m-2" />
        </NavLink>
      </div>
      <div className="center-nav">
        <NavLink to="/" className="text-white">
          <img className="w-20 m-4" src={glimLogo} alt="glim logo" />
        </NavLink>
      </div>
      <div className="right-nav flex">
        <NavLink to="/cart" className="text-white">
          <img src={shoppingCart} alt="Shopping cart" className="w-6" />
        </NavLink>

        <NavLink to="/products" className="text-white tablet:hidden">
          <p>Products</p>
        </NavLink>

        <img src={burgerMenu} alt="Menu" className="h-10" />
      </div>
    </nav>
  );
};

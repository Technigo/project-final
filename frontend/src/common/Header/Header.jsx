import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logotypes/logo-stamp.svg";
// import hamburger from "/assets/icons/hamburger.svg";
import cart from "/assets/icons/cart.svg";
// import search from "/assets/icons/search.svg";
// import user from "/assets/icons/user.svg";
import { Image } from "../ReusableComponents/Image/Image";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <HamburgerMenu />
        {/* <button className="hamburger-button">
          <Image
            src={hamburger}
            alt="hamburger-menu"
            className="hamburger-menu"
          />
        </button> */}
        <ul className="nav-categories">
          <li>
            <h5>
              {/* The end attribute on NavLink makes it so that the link will only be considered active if the location is exactly the same as the to value.  */}
              <NavLink to="/products" end>
                All products
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/tops">Tops</NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/bottoms">Bottoms</NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/dresses">Dresses</NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/products/category/accessories">Accessories</NavLink>
            </h5>
          </li>
        </ul>
        <div className="nav-logo">
          <Link to="/">
            <Image src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-icons">
          {/* <button className="search-button">
            <Image src={search} alt="search" className="search" />
          </button> */}
          {/* <Link to="/">
            <Image src={user} alt="my-account" className="user" />
          </Link> */}
          <Link to="/">
            <Image src={cart} alt="shopping-cart" className="cart" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

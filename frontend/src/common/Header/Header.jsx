/* import { Image } from "../../stores/useCartStore"; */
/* import { useCartStore } from "../../stores/useCartStore"; */
// import search from "/assets/icons/search.svg";
// import user from "/assets/icons/user.svg";
import { Image } from "../ReusableComponents/Image/Image";
import { HamburgerMenu } from "./HamburgerMenu";
// import hamburger from "/assets/icons/hamburger.svg";
import cart from "/assets/icons/cart.svg";
import logo from "/assets/logotypes/logo-stamp.svg";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import { useBagStore } from "../../stores/useBagStore";

export const Header = () => {
  // Destructuring getTotalItems from useCartStore
  const { getTotalItems } = useBagStore();
  const totalItems = getTotalItems();

  return (
    <header>
      <nav className="nav-container">
        <HamburgerMenu />
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
          <Link to="/cart">
            <Image src={cart} alt="shopping-cart" className="cart" />
            {/* Conditionally render total item count if it's larger than 0 */}
            {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

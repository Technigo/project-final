import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logotypes/logo-stamp.svg";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} className="logo-stamp" alt="logo"></img>
        </Link>
        <ul className="navbar-categories">
          <li>
            {/* The end attribute on NavLink makes it so that the link will only be considered active if the location is exactly the same as the to value.  */}
            <NavLink to="/products" end>
              All products
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/category/tops">Tops</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/bottoms">Bottoms</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/dresses">Dresses</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/accessories">Accessories</NavLink>
          </li>
        </ul>
        <ul className="navbar-icons">
          <button>
            <img src={search} alt="search-icon"></img>
          </button>
          <Link to="/">
            <img src={user} alt="my-account"></img>
          </Link>
          <Link to="/">
            <img src={cart} alt="shopping-cart"></img>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

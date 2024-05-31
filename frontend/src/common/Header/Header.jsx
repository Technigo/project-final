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
            <NavLink to="/products">All products</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/:category">Tops</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/:category">Bottoms</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/:category">Dresses</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/:category">Accessories</NavLink>
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

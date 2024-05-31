import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <ul>
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
      </nav>
    </header>
  );
};

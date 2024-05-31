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
      </nav>
    </header>
  );
};

import { Link } from "react-router-dom";
import "../styling/componentsStyling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src="/icons/LogoIcon.png" alt="Logo Icon" />
      <ul className="navList">
        <li className="navListItems">
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li className="navListItems">
          <Link to="/rentals" className="navLink">
            Rentals
          </Link>
        </li>

        <li className="navListItems">
          <Link to="/faq" className="navLink">
            FAQ
          </Link>
        </li>

        <li className="navListItems">
          <Link to="/profile" className="navLink">
            Profile{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink, Link } from "react-router-dom";
import { Toggle } from "../ReusableComponents/Toggle/Toggle";
import "./Footer.css";
import logoFooter from "/assets/logotypes/logo-footer.svg";
import { Image } from "../ReusableComponents/Image/Image";

export const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <Link to="/" onClick={handleLinkClick}>
          <Image src={logoFooter} alt="footer-logo" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-wrapper">
        <Toggle title="Clothes">
          <ul className="footer-categories">
            <li>
              <NavLink to="/products" end onClick={handleLinkClick}>
                All clothes
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/category/tops" onClick={handleLinkClick}>
                Tops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category/bottoms"
                onClick={handleLinkClick}
              >
                Bottoms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category/dresses"
                onClick={handleLinkClick}
              >
                Dresses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category/accessories"
                onClick={handleLinkClick}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </Toggle>
        {/* <Toggle title="My account">
        <ul className="footer-categories">
          <li>Dashboard</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </Toggle> */}
        <Toggle title="Customer service">
          <ul className="footer-categories">
            <li>
              This is not a real web shop, but if it was, it'd probably have the
              best customer service in the world.
            </li>
          </ul>
        </Toggle>
        <Toggle title="About us">
          <ul className="footer-categories">
            <li>
              This page was developed by Erica Mechler, Frida Svensson & Johanna
              Billingskog Nyberg for our final project of the Web Development
              Bootcamp at Technigo.
            </li>
            <li>
              Visit our about page to read more about us and this project!
            </li>
          </ul>
        </Toggle>
      </div>
    </footer>
  );
};

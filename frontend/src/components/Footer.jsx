import "./styling/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/icons/LogoIcon.png" className="logoIcon" alt="Logo Icon" />
      <p className="footerText">palmarentals@outlook.com</p>
      <Link to="/about" className="about">
        About
      </Link>
    </div>
  );
};

export default Footer;

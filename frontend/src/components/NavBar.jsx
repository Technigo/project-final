import { Link } from "react-router-dom";
import { WebName } from "./WebName";
import { SignupBtn } from "./buttons/SignupBtn";


export const NavBar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  return (
    <div className="park-nav">
      
      <WebName />
      <nav>
        <ul className="navbar">
          {links.map(({ to, text }) => (
            <li key={to} className="nav-li">
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
        <SignupBtn />
        <Link to="/login">login</Link>
      </nav>
    </div>
  );
};

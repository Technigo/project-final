import { Link, useLocation } from "react-router-dom";
import { Contact } from "./Contact";

export const Footer = ({className}) => {
  const links = [
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  const location = useLocation();

  let bgColor;
  let textColor;
  if (location.pathname === "/sweden" || location.pathname === "/signup") {
    bgColor = "bg-bg2";
    textColor = "text-cardBg";
  } else if (
    location.pathname === "/finland" ||
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/login" ||
    location.pathname === "/logged" ||
    location.pathname === "*"
  ) {
    bgColor = "bg-bg1";
    textColor = "text-fontColor";
  }
  return (
    <>
  
      <div className={`${bgColor} ${textColor} ${className} p-3 `}>
        <div className="flex flex-col ">
          <h2 className="text-h2sm lg:text-h2lg pb-[30px]">ParkHive</h2> 
          <div className="flex flex-row place-content-start gap-x-[150px]">
            <ul className="sm:text-textmd text-textmd">
            {links.map(({ to, text }) => (
              <li key={to} className="nav-li">
                <Link to={to}>{text}</Link>
              </li>
            ))}
          </ul>
          <Contact />
          </div> 
        </div>
        <footer className="text-center">
          <p>Created by Trista Shan & Yia Tsai</p>
        </footer>
      </div>
    </>
  );
};

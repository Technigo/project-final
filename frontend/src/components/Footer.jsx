import { Link, useLocation } from "react-router-dom";
import { Contact } from "./Contact";
import { LogoFullBlack } from "../components/iconFolder/LogoFullBlack";
import { LogoFullWhite } from "../components/iconFolder/LogoFullWhite";

export const Footer = ({ className }) => {
  const links = [
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  const location = useLocation();

  let bgColor;
  let textColor;
  let useWhiteLogo =
    location.pathname === "/sweden" || location.pathname === "/signup";

  if (useWhiteLogo) {
    bgColor = "bg-bg2";
    textColor = "text-cardBg";
  } else {
    bgColor = "bg-bg1";
    textColor = "text-fontColor";
  }

  return (
    <>
      <div className={`${bgColor} ${textColor} ${className} p-3 `}>
        <div className="flex flex-col ">
          {useWhiteLogo ? <LogoFullWhite /> : <LogoFullBlack />}
          <div className="flex flex-row place-content-start gap-x-[150px]">
            <ul className="sm:text-textmd text-textmd md:pl-[10px]">
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
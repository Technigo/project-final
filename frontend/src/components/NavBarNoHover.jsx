import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoFullBlack } from "./iconFolder/LogoFullBlack";
import { Hamburger } from "./buttons/Hamburger";

export const NavBarNoHover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/", text: "Home" },
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  return (
    <div className="bg-cardBg relative">
      <div className="max-w-7xl mx-auto px-[16px] sm:px-[24px] lg:px-[32px] flex justify-between items-center h-[55px] md:text-textmd sm:text-textsm">
        <div className="flex items-center">
          <LogoFullBlack />
          <button
            className="md:hidden ml-[200px]"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Hamburger />
          </button>
          <nav
            className="hidden md:block ml-[20px] font-avenir"
            aria-label="Main navigation"
          >
            <ul className="flex space-x-[8px] md:space-x-[16px]">
              {links.map(({ to, text }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="px-[15px] py-[7px] md:px-[20px] md:py-[5px] lg:text-textlg md:text-textmd sm:text-textsm md:whitespace-nowrap rounded-md text-sm text-fontColor transition-transform duration-300 hover:scale-105"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-[8px] md:space-x-[12px]">
          <Link
            to="/signup"
            className="px-[10px] py-[5px] md:px-[12px] md:py-[5px] lg:text-textlg md:text-textmd sm:text-textsm sm:whitespace-nowrap rounded-3xl border-2 border-fontColor text-sm font-medium text-fontColor font-avenir transition-transform duration-300 hover:scale-105"
            aria-label="Sign up for an account"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-[10px] py-[5px] md:px-[12px] md:py-[5px] rounded-md text-sm font-medium text-fontColor font-avenir transition-transform duration-300 hover:scale-105"
            aria-label="Log in to your account"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Mobile Menu, placed right below the navbar */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-cardBg shadow-md absolute w-full`}
      >
        <nav>
          <ul>
            {links.map(({ to, text }) => (
              <li key={to} className="text-left">
                <Link
                  to={to}
                  className="px-[30px] py-[10px] text-sm font-medium text-black block"
                  onClick={() => setIsOpen(false)} // Close menu after click
                >
                  {text}
                </Link>
              </li>
            ))}
            <li className="text-left">
              <Link
                to="/signup"
                className="px-[30px] py-[10px] text-sm font-medium font-avenir text-fontColor block"
                onClick={() => setIsOpen(false)}
                aria-label="Sign up for an account"
              >
                Sign Up
              </Link>
            </li>
            <li className="text-left">
              <Link
                to="/login"
                className="px-[30px] py-[10px] text-sm font-medium font-avenir text-fontColor block"
                onClick={() => setIsOpen(false)}
                aria-label="Log in to your account"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

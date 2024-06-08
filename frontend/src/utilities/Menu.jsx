import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-15 backdrop-blur-md shadow fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bold text-primary hidden md:block">
            ADHD Community
          </div>
        </div>

        <div className="hidden md:flex">
          <Link to="/" className="mx-2 text-dark hover:text-light">
            Home
          </Link>
          <Link to="/events" className="mx-2 text-dark hover:text-light">
            Events
          </Link>
          <Link
            to="/community-guidelines"
            className="mx-2 text-dark hover:text-light"
          >
            Community Guidelines
          </Link>
          <Link to="/about" className="mx-2 text-dark hover:text-light">
            About Us
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-dark focus:outline-none"
        >
          <img
            src="/icons/hamburger.png"
            alt="Menu"
            className="w-6 h-6"
            fill="none"
          ></img>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Events
          </Link>
          <Link
            to="/community-guidelines"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Community Guidelines
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Menu;

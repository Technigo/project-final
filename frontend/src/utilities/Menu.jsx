import { useState } from "react";
import logo from "/logo.png";

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
          <a href="/" className="mx-2 text-dark hover:text-secondary">
            Home
          </a>
          <a href="/about" className="mx-2 text-dark hover:text-secondary">
            About Us
          </a>
          <a href="/events" className="mx-2 text-dark hover:text-secondary">
            Events
          </a>
          <a href="/guidelines" className="mx-2 text-dark hover:text-secondary">
            Community Guidelines
          </a>
          <a
            href="/support-wall"
            className="mx-2 text-dark hover:text-secondary"
          >
            Support Wall
          </a>
          <a href="/contact" className="mx-2 text-dark hover:text-secondary">
            Contact
          </a>
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
            /*  xmlns="http://www.w3.org/2000/svg" */
          ></img>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="/"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            About Us
          </a>
          <a
            href="/events"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Events
          </a>
          <a
            href="/guidelines"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Community Guidelines
          </a>
          <a
            href="/support-wall"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Support Wall
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-dark hover:text-secondary"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Menu;

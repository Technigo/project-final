import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light p-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start md:text-left space-y-4 md:space-y-0 text-center">
        <div className="w-full md:w-auto md:flex-1 md:text-left md:mt-0">
          <h2 className="text-lg ">ADHD Community</h2>
          <p>Connecting and supporting through shared experiences</p>
        </div>
        <div className="w-full md:w-auto md:flex-1 md:ml-8 lg:ml-16 space-y-2">
          <h3 className="text-base">Quick Links</h3>
          <ul className="list-none space-y-1">
            <li>
              <Link to="/about" className="text-accent hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-accent hover:text-primary">
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/community-guidelines"
                className="text-accent hover:text-primary"
              >
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto md:ml-8 lg:ml-16 md:flex-1 space-y-2">
          <h3 className="text-base">Follow Us</h3>
          <ul className="list-none space-y-1">
            <li>
              <a
                href="https://twitter.com"
                className="text-accent hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                className="text-accent hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-accent hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:w-auto md:flex-1 md:text-right w-full mt-4 md:mt-0">
          <p>
            &copy; {currentYear} ADHD Community. All rights reserved. Designed
            by MARIA-MANUELA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

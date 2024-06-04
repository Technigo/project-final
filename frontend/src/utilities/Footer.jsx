import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light p-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row md:jutsify-between md:items-center md:text-left md:space-y-0 space-y-4 items-center text-center">
        <div>
          <h2 className="text-lg font-serif">ADHD Community</h2>
          <p>Connecting and supporting through shared experiences</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-sans">Quick Links</h3>
          <ul className="list-none">
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
        <div>
          <h3 className="font-sans">Follow Us</h3>
          <ul className="list-none flex justify-center md:justify-center space-x-4">
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
        <div className="text-center md:text-right  w-full md:w-auto mt-4 md:mt-0">
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

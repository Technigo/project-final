import "../styling/componentsStyling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoImage" src="/icons/LogoIcon.png" alt="Logo Icon" />
      <ul className="navList">
        <li className="navListItems">Home</li>
        <li className="navListItems">Rentals</li>
        <li className="navListItems">FAQ</li>
        <li className="navListItems">Profile</li>
      </ul>
      <img
        className="AccountIcon"
        src="/icons/AccountIcon.png"
        alt="Account Icon"
      />
    </nav>
  );
};

export default Navbar;

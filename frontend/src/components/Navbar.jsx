import "../styling/componentsStyling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src="/icons/LogoIcon.png" alt="Logo Icon" />
      <ul className="navList">
        <li className="navListItems">Home</li>
        <li className="navListItems">Rentals</li>
        <li className="navListItems">FAQ</li>
        <li className="navListItems">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import "../../styling/sectionsStyling/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img
        src="/images/HeaderImage.jpg"
        className="headerImage"
        alt="Image of Palma"
      />
      <h1 className="headerTitle">Palma Rentals</h1>
    </div>
  );
};

export default Header;

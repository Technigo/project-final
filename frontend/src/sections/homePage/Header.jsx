import "../../styling/sectionsStyling/homePage/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img
        src="/images/HeaderImage.svg"
        className="headerImage"
        alt="Image of Palma"
      />
      <h1 className="headerTitle">Palma Rentals</h1>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import "../../styling/sectionsStyling/homePage/SeeRentalsButton.css";

const SeeRentalsButton = () => {
  return (
    <div className="seeRentalsContainer">
      <Link to="/rentals">
        <button className="seeRentalsButton">See the Rentals</button>
      </Link>
    </div>
  );
};

export default SeeRentalsButton;

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styling/sectionsStyling/homePage/SeeRentalsButton.css";

const SeeRentalsButton = () => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated && (
      <div className="seeRentalsContainer">
        <Link to="/rentals">
          <button className="seeRentalsButton">See the Rentals</button>
        </Link>
      </div>
    )
  );
};

export default SeeRentalsButton;

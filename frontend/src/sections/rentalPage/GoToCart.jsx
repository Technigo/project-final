import { Link } from "react-router-dom";
import "../../styling/sectionsStyling/rentalPage/GoToCart.css";

const GoToCart = () => {
  return (
    <div className="goToCartContainer">
      <div className="goToCartWrapper">
        <Link to="/profile">
          <button className="goToCartButton">Go to Cart</button>
        </Link>
        <p className="goToCartText">
          Are you missing something? We would love to help you find the items
          you want to rent for your perfect vacation. Fill in our form to
          request any item you are not finding.
        </p>

        <div className="arrowWrapper">
          <Link to="/faq">
            <img
              src="/icons/ArrowIcon.png"
              alt="Arrow Icon link"
              className="arrowIcon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoToCart;

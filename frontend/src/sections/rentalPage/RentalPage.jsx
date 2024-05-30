import RentalList from "./RentalList";
import GoToCart from "./GoToCart";
import "../../styling/sectionsStyling/rentalPage/RentalPage.css";

const RentalPage = () => {
  return (
    <div>
      <RentalList />
      <GoToCart />
    </div>
  );
};

export default RentalPage;

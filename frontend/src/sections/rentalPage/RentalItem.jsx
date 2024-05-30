import { useEffect, useState } from "react";
import rentalsData from "./rentals.json";

const RentalItem = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    setRentals(rentalsData.rentals);
  }, []);

  return (
    <div className="rentalItemContainer">
      {rentals.map((item, index) => (
        <div key={index} className="rentalListItem">
          <img src={item.image} alt={item.name} className="rentalItemImage" />
          <div className="rentalListItemDetails">
            <p className="rentalItemDescription">{item.description}</p>
            <h3 className="rentalItemPrice">{item.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalItem;

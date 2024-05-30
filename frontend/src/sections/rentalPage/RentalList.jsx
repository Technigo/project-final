import { useState, useEffect } from "react";
import RentalItem from "./RentalItem";
import rentalsData from "./rentals.json";

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (Array.isArray(rentalsData.rentals)) {
      setRentals(rentalsData.rentals);
    }
  }, []);

  return (
    <div className="rentalListContainer">
      <h2 className="rentalListTitle">Items for Rent</h2>
      {rentals.map((rental, index) => (
        <RentalItem key={index} rental={rental} />
      ))}
    </div>
  );
};

export default RentalList;

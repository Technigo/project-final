import RentalItem from "./RentalItem";

const RentalList = () => {
  return (
    <div className="rentalListContainer">
      <h2 className="rentalListTitle">Items for Rent</h2>
      <div className="rentalListItem">
        <RentalItem />
      </div>
    </div>
  );
};

export default RentalList;

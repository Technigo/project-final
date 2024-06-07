import PropTypes from "prop-types";

export const CategoryCard = ({ category, imageURL }) => {
  console.log(imageURL);
  return (
    <>
      <div
        className={`absolute inset-0 bg-[url(${imageURL})] bg-center" bg-cover`}
      >
        <div className="w-ful absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/50"></div>
      </div>
      <div className="z-50 space-y-6 text-center font-montserrat font-bold text-white">
        <h3>{category}</h3>
        <p>SHOP ALL</p>
      </div>
    </>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const CategoryButton = ({ category }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <button
      className="w-fit text-sm font-bold text-blue lg:text-xs"
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
};

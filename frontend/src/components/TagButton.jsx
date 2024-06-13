import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { useProductStore } from "../stores/useProductStore";

export const TagButton = ({ tags }) => {
  // const { setTag } = useProductStore((state) => state.setTag);
  const navigate = useNavigate();
  const handleTagClick = (tag) => {
    navigate(`/products?tag=${tag}`);
  };
  return (
    <span className="mb-1 mt-2 flex flex-row">
      {tags.split(", ").map((tag) => (
        <button
          key={tag}
          className="mr-2 text-sm text-blue lg:text-xs"
          onClick={() => {
            handleTagClick(tag);
          }}
        >
          #{tag}
        </button>
      ))}
    </span>
  );
};

TagButton.propTypes = {
  tags: PropTypes.string.isRequired,
};

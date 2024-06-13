import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const category = [
  {
    name: "Business",
    bgName: "business",
    // bgName:
    //   "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Travel and Adventure",
    bgName: "travel",
  },
  {
    name: "Color",
    bgName: "color",
  },
  {
    name: "Health and Wellness",
    bgName: "health",
  },
];

export const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <>
      {category.map((item) => (
        <div
          key={item.name}
          className="relative px-2 flex h-80 cursor-pointer items-center justify-center rounded-md shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)] lg:h-96"
          onClick={() => navigate(`/products?category=${item.name}`)}
        >
          <div
            className={`absolute inset-0 bg-${item.bgName} bg-cover bg-center`}
          >
            <div className="w-ful absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/50"></div>
          </div>
          <div className="z-50 space-y-6 text-center font-montserrat font-bold text-white">
            <h3>{item.name}</h3>
            <p>SHOP ALL</p>
          </div>
        </div>
      ))}
    </>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  bgName: PropTypes.string.isRequired,
};

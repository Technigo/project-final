import { useNavigate } from "react-router-dom";
import health from "../assets/bg/health.jpg";
import travel from "../assets/bg/travel.jpg";
import business from "../assets/bg/business.jpg";
import color from "../assets/bg/color.jpg";

const category = [
  {
    name: "Business",
    bg: business,
  },
  {
    name: "Travel and Adventure",
    bg: travel,
  },
  {
    name: "Color",
    bg: color,
  },
  {
    name: "Health and Wellness",
    bg: health,
  },
];

export const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <>
      {category.map((item) => (
        <div
          key={item.name}
          className="relative flex h-80 cursor-pointer items-center justify-center rounded-md px-2 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)] lg:h-96"
          onClick={() => navigate(`/products?category=${item.name}`)}
        >
          <div className={`absolute inset-0 bg-cover bg-center`}>
            <img className="h-full w-full object-cover" src={item.bg} />
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

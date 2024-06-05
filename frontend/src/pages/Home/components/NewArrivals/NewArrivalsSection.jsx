import { Link } from "react-router-dom";
import { Image } from "../../../../common/ReusableComponents/Image/Image";
import "./NewArrivalsSection.css";

export const NewArrivalsSection = () => {
  const newArrivals = [
    {
      imgUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716972787/8-5btp2scqhGXTo9o_rp9via.png",
      imgAlt: "Kids with colorful clothes",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/t_Square/v1716982762/openart-image_ZOq7te29_1716981357751_raw_si9nk9.jpg",
      imgAlt: "Kids with summer clothes",
    },
  ];

  return (
    <div className="new-arrivals-container">
      {newArrivals.map((newArrival, index) => (
        <div key={index}>
          <Link to={`/products?sort=date_desc`}>
            <Image
              className="new-arrivals"
              src={newArrival.imgUrl}
              alt={newArrival.imgAlt}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

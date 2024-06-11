import PropTypes from "prop-types";

import cart from "../assets/cart-blue.svg";
import { useState } from "react";
import { HeartIcon } from "./HeartIcon";
import { useUserStore } from "../stores/useUserStore";
import { SideDrawer } from "./SideDrawer";
import { useProductStore } from "../stores/useProductStore";

export const ProductCard = ({
  id,
  templateImg,
  tags,
  name,
  price,
  category,
}) => {
  // const [like, setLike] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const { accessToken } = useUserStore();
  const { unlikeProduct, likeProduct, favoriteProducts } = useProductStore();
  const handleLike = async () => {
    if (accessToken) {
      favoriteProducts.includes(id) ? unlikeProduct(id) : likeProduct(id);
    } else {
      setOpenRight(true);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <img src={templateImg} alt="image of the template" />
        <span className="mb-1 mt-2 flex flex-row">
          {tags.split(", ").map((tag) => (
            <button key={tag} className="mr-2 text-sm text-blue lg:text-xs">
              #{tag}
            </button>
          ))}
        </span>
        <div className="flex flex-row justify-between font-montserrat">
          <div className="flex flex-col">
            <p className="mb-2 text-sm font-bold text-blue lg:text-xs">
              {category}
            </p>
            <p className="font-montserrat text-lg font-bold lg:text-sm">
              {name}
            </p>
            <p className="mt-1 text-sm lg:text-xs">€{price}</p>
          </div>
          <div className="flex flex-row items-center gap-6 lg:gap-4">
            <button className="h-8 w-8 lg:h-5 lg:w-5" onClick={handleLike}>
              <HeartIcon like={favoriteProducts.includes(id)} />
            </button>
            <button className="h-6 w-6 lg:h-4 lg:w-4">
              <img src={cart} alt="add to cart button" />
            </button>
          </div>
        </div>
      </div>
      <SideDrawer openRight={openRight} setOpenRight={setOpenRight} />
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  templateImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

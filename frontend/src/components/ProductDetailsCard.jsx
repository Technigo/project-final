import PropTypes from "prop-types";
import { useState } from "react";

import favorite from "../assets/icons/favorite-icon.svg";
import { useUserStore } from "../stores/useUserStore";
import { Button } from "./Button";
import { CategoryButton } from "./CategoryButton";
import { HeartButton } from "./HeartButton";
import { SideDrawer } from "./SideDrawer";
import { TagButton } from "./TagButton";

export const ProductDetailsCard = ({
  numOfLikes,
  image,
  tags,
  price,
  templateName,
  description,
  category,
  id,
}) => {
  const { accessToken, handleCart, handleNonLoginCart } = useUserStore(
    (state) => ({
      accessToken: state.accessToken,
      handleCart: state.handleCart,
      handleNonLoginCart: state.handleNonLoginCart,
    }),
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const addToCart = () => {
    if (!accessToken) {
      handleNonLoginCart(id);
    } else {
      handleCart(id);
    }
  };

  return (
    <div className="mx-auto flex w-4/5 min-w-[300px] flex-col gap-3 font-montserrat lg:flex-row lg:place-content-center lg:gap-10">
      <div className="relative lg:h-fit">
        <span className="absolute left-5 top-5 flex h-8 w-fit flex-row items-center gap-2 rounded-3xl border-none bg-light-gray p-3 font-bold text-blue">
          <img
            className="h-3 w-3"
            src={favorite}
            alt="favorite icon"
            aria-label="likes"
          />
          <p>{numOfLikes} likes</p>
        </span>
        <img
          className="lg:max-w-[600px]"
          src={image}
          alt="image of the template"
        />
        <HeartButton
          style="absolute bottom-5 right-5 h-8 w-8 rounded-full bg-white p-[5px] hover:bg-light-gray"
          id={id}
          setOpenDrawer={setOpenDrawer}
          aria-label="like the product"
        />
      </div>
      <div className="flex w-full flex-col gap-3 lg:w-96 lg:flex-none lg:justify-between">
        <TagButton tags={tags} />
        <CategoryButton category={category} />

        <h1 className="font-montserrat font-bold">{templateName}</h1>
        <p className="text-sm">€{price}</p>
        <p>{description}</p>
        <div className="mt-6 w-fit self-center lg:self-start">
          <Button text="ADD TO CART" onClickFunc={addToCart} />
        </div>
      </div>
      <SideDrawer openRight={openDrawer} setOpenRight={setOpenDrawer} />
    </div>
  );
};

ProductDetailsCard.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numOfLikes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

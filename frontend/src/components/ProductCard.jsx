import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeartButton } from "./HeartButton";
import { CartButton } from "./CartButton";
import { SideDrawer } from "./SideDrawer";
import { TagButton } from "./TagButton";
import { CategoryButton } from "./CategoryButton";

export const ProductCard = ({
  id,
  templateImg,
  tags,
  name,
  price,
  category,
  setOpenDrawer
}) => {

  return (
    <div className="flex flex-col">
      <Link to={`/products/${id}`} className="text-black no-underline">
        <img src={templateImg} alt="image of the template" />
      </Link>
      <TagButton tags={tags} />
      <div className="flex flex-row justify-between font-montserrat">
        <div className="flex flex-col">
          <CategoryButton category={category} />
          <p className="font-montserrat text-lg font-bold lg:text-sm">{name}</p>
          <p className="mt-1 text-sm lg:text-xs">€{price}</p>
        </div>
        <div className="flex flex-row items-center gap-6 lg:gap-4">
          <HeartButton
            style="h-8 w-8"
            id={id}
            setOpenDrawer={setOpenDrawer}
          />
          <CartButton id={id} setOpenDrawer={setOpenDrawer} />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  templateImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  setOpenDrawer: PropTypes.func
};

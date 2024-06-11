import PropTypes from "prop-types";
import rubbish from "../assets/rubbish-bin-blue.svg";

import fakePic from "../assets/thank-you.jpg";
import { useUserStore } from "../stores/useUserStore";

export const CartItem = ({ id, image, name, price }) => {
  const { handleCart } = useUserStore((state) => ({
    handleCart: state.handleCart,
  }));

  const removeCart = () => {
    handleCart(id, "remove");
  };
  return (
    <div className="flex h-[180px] w-auto max-w-[500px] flex-col justify-center p-3 shadow-md">
      <div className="mx-2 flex flex-row">
        <img
          className="h-[130px] self-center"
          src={image}
          alt="image of our template"
        />
        <div className="flex w-60 flex-col gap-3">
          <p className="pb-3 pl-2 font-montserrat text-base font-bold">
            {name}
          </p>
          <p className="pb-8 pl-2 font-montserrat text-sm">{price}</p>
          <button
            className="text flex flex-row self-end pr-2 font-montserrat text-xs text-blue"
            onClick={removeCart}
          >
            Remove item
            <img className="h-4 w-4" src={rubbish} alt="remove item" />
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

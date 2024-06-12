import PropTypes from "prop-types";

import rubbish from "../assets/rubbish-bin-blue.svg";
import { useUserStore } from "../stores/useUserStore";

export const CartItem = ({ id, image, name, price }) => {
  const { handleCart } = useUserStore((state) => ({
    handleCart: state.handleCart,
  }));

  const removeCart = () => {
    handleCart(id, "remove");
  };
  return (
    <div className="flex w-auto max-w-[500px] flex-col justify-center mx-6 shadow-lg mb-6">
      <div className="m-3 flex flex-row">
        <img
          className="h-[80px] self-center"
          src={image}
          alt="image of our template"
        />
        <div className="flex w-60 m-3 flex-col">
          <p className="pb-3 font-montserrat text-base font-bold">
            {name}
          </p>
          <p className="pb-4 font-montserrat text-sm">{price}</p>
          <button
            className="text flex flex-row self-end font-montserrat text-xs text-blue"
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
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

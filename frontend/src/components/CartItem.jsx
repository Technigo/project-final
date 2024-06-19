import PropTypes from "prop-types";

import rubbish from "../assets/rubbish-bin-blue.svg";
import { useUserStore } from "../stores/useUserStore";

export const CartItem = ({ id, image, name, price }) => {
  const { accessToken, handleCart, handleNonLoginCart } = useUserStore(
    (state) => ({
      accessToken: state.accessToken,
      handleCart: state.handleCart,
      handleNonLoginCart: state.handleNonLoginCart,
    }),
  );

  const removeCart = () => {
    if (accessToken) {
      handleCart(id, "remove");
    } else {
      handleNonLoginCart(id, "remove");
    }
  };
  return (
    <div className="mx-6 mb-6 flex w-auto max-w-[500px] flex-col justify-center shadow-lg">
      <div className="m-3 flex flex-row">
        <img
          className="h-[80px] self-center"
          src={image}
          alt="image of our template"
        />
        <div className="m-3 flex w-60 flex-col">
          <p className="pb-3 font-montserrat text-base font-bold">{name}</p>
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

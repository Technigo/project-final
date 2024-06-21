import PropTypes from "prop-types";

import cartIconBlue from "../assets/icons/cart-blue.svg";
import cartIconFilled from "../assets/icons/cart-icon-filled.svg";
import { useUserStore } from "../stores/useUserStore";

export const CartButton = ({ id }) => {
  const { accessToken, cart, handleCart, handleNonLoginCart } = useUserStore(
    (state) => ({
      accessToken: state.accessToken,
      cart: state.cart,
      handleCart: state.handleCart,
      handleNonLoginCart: state.handleNonLoginCart,
    }),
  );

  const isInCart = cart.includes(id);

  const handleCartItem = () => {
    if (!accessToken) {
      handleNonLoginCart(id, isInCart ? "remove" : "add");
    } else {
      handleCart(id, isInCart ? "remove" : "add");
    }
  };

  return (
    <button
      onClick={handleCartItem}
      className={`cart-button ${isInCart ? "in-cart" : ""}`}
    >
      {isInCart ? (
        <img src={cartIconFilled} alt="Remove from cart" />
      ) : (
        <img src={cartIconBlue} alt="Add to cart" />
      )}
    </button>
  );
};

CartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

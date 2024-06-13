import PropTypes from "prop-types";
import { useUserStore } from "../stores/useUserStore";
import cartIconBlue from "../assets/cart-blue.svg";
import cartIconFilled from "../assets/cart-icon-filled.svg";

export const CartButton = ({ id, setOpenDrawer }) => {
  const { accessToken, cart, handleCart } = useUserStore((state) => ({
    accessToken: state.accessToken,
    cart: state.cart,
    handleCart: state.handleCart,
  }));

  const isInCart = cart.includes(id);

  const handleCartItem = () => {
    if (!accessToken) {
      setOpenDrawer(true);
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
  setOpenDrawer: PropTypes.func.isRequired,
};

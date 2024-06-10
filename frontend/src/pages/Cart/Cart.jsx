import cross from "/assets/icons/cross.svg";
import minus from "/assets/icons/minus.svg";
import plus from "/assets/icons/plus.svg";

import { Image } from "../../common/ReusableComponents/Image/Image";
import { useCartStore } from "../../stores/useCartStore";

import "./Cart.css";

export const Cart = () => {
  const {
    cart: CartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const handleIncrease = (product, selectedSize) => {
    addToCart(product, selectedSize);
  };

  const handleDecrease = (productId, selectedSize) => {
    decreaseQuantity(productId, selectedSize);
  };

  const handleRemove = (productId, selectedSize) => {
    removeFromCart(productId, selectedSize);
  };

  return (
    <div className="cart-container">
      <h4>Cart({getTotalItems()})</h4>
      {CartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div>
          {CartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="cart-product-details">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  className="cart-product"
                />
                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <button onClick={() => handleRemove(item._id, item.size)}>
                    <Image src={cross} alt="cross-icon" className="remove" />
                  </button>
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                  <div className="item-quantity-wrapper">
                    <button onClick={() => handleDecrease(item._id, item.size)}>
                      <Image
                        src={minus}
                        alt="minus-icon"
                        className="decrease"
                      />
                    </button>
                    <h6 className="text-xs">{item.quantity}</h6>
                    <button onClick={() => handleIncrease(item, item.size)}>
                      <Image src={plus} alt="plus-icon" className="increase" />
                    </button>
                  </div>
                  <p>Price: {item.price} SEK </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

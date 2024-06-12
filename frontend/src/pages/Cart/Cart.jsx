import cross from "/assets/icons/cross.svg";
import minus from "/assets/icons/minus.svg";
import plus from "/assets/icons/plus.svg";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "../../common/ReusableComponents/Button/Button";
import { Image } from "../../common/ReusableComponents/Image/Image";
import { DeliveryStatements } from "../Home/components/DeliveryStatements/DeliveryStatements";

import "./Cart.css";
import { useBagStore } from "../../stores/useBagStore";
import { BACKEND_URL } from "../../config";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const Cart = () => {
  const {
    cart: CartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useBagStore();

  const handleIncrease = (product, selectedSize) => {
    addToCart(product, selectedSize);
  };

  const handleDecrease = (productId, selectedSize) => {
    decreaseQuantity(productId, selectedSize);
  };

  const handleRemove = (productId, selectedSize) => {
    removeFromCart(productId, selectedSize);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: CartItems.map((item) => ({
          id: item._id,
          quantity: item.quantity,
        })),
      }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="cart-page">
      <h4 className="cart-heading">Cart({getTotalItems()})</h4>
      {CartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div className="cart-container">
          <section className="cart-list">
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
                      <button
                        onClick={() => handleDecrease(item._id, item.size)}
                      >
                        <Image
                          src={minus}
                          alt="minus-icon"
                          className="decrease"
                        />
                      </button>
                      <h6 className="text-xs">{item.quantity}</h6>
                      <button onClick={() => handleIncrease(item, item.size)}>
                        <Image
                          src={plus}
                          alt="plus-icon"
                          className="increase"
                        />
                      </button>
                    </div>
                    <p>Price: {item.price} SEK </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="cart-summary">
            <div className="shipping">
              <h6 className="text-xs">Shipping</h6>
              <h6 className="text-xs">0.00 SEK</h6>
            </div>

            <div className="total">
              <h6>Total</h6>
              <h6>{getTotalPrice()} SEK</h6>
            </div>
            <Button
              variant="clear-cart"
              label="Clear cart"
              onClick={handleClearCart}
            />
            <Button
              variant="shop"
              label="Checkout"
              onClick={handleCheckout}
              className="checkout"
            />
          </section>

          <DeliveryStatements variant="white" />
        </div>
      )}
    </div>
  );
};

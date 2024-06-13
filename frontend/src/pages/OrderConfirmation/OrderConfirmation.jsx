import { useEffect } from "react";
import { useBagStore } from "../../stores/useBagStore";
import "./OrderConfirmation.css";

export const OrderConfirmation = () => {
  const { clearCart } = useBagStore();

  // Clear the cart when the component mounts
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="order-confirmation-container">
      <h2>
        Thank you <br></br>for your order!
      </h2>
      <p>
        A confirmation of your order has NOT been sent to your email, since this
        is not a real webshop! 😉
      </p>
    </div>
  );
};

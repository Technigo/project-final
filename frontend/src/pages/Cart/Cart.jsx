import { Image } from "../../common/ReusableComponents/Image/Image";
import { useCartStore } from "../../stores/useCartStore";

import "./Cart.css";

export const Cart = () => {
  const { cart: CartItems } = useCartStore();
  return (
    <div className="cart-container">
      <h4>Cart</h4>
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
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                  <p>Price: {item.price} SEK </p>
                </div>
              </div>
              <p className="quantity">Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

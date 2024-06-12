import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styling/sectionsStyling/profilePage/ShoppingCartSection.css";

const ShoppingCartSection = () => {
  const {
    cartItems,
    totalPrice,
    handleRemoveFromCart,
    handleClearCart,
    fetchCartItems,
  } = useCart();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div className="shoppingCartContainer">
      <div className="shoppingCartWrapper">
        <div className="cartIconWrapper">
          <img
            className="cartIcon"
            src="/icons/CartIcon.png"
            alt="Shoppingcart Icon"
          />
        </div>
        <h2 className="shoppingCartTitle">Your shoppingcart</h2>

        <div className="shoppingCartItems">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <div className="cartItemDetails">
                  <p className="cartItemName">{item.name}</p>
                  <h3 className="cartItemPrice">{item.price}</h3>
                  <button onClick={() => handleRemoveFromCart(item._id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <form className="shoppingCartForm">
          <h2 className="deliveryTitle">Delivery</h2>
          <label className="rentalDateLabel">
            Fill in the date when you want to start renting the items: <br />
            <input type="date" required className="dateInput" />
          </label>

          <label className="rentalDateLabel">
            When do you want to return the items? <br />
            <input type="date" required className="dateInput" />
          </label>

          <label className="deliveryAdressText">
            Delivery adress: <br />
            <input type="text" required className="deliveryAdress" />
          </label>

          <h3 className="totalPrice">Total: €{totalPrice}</h3>

          <button className="sendOrderButton">Send Order</button>
        </form>

        <p className="shoppingCartQuestionsText">
          Do you have any questions? Take a look at{" "}
          <Link to="/faq" className="faqLink">
            FAQ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ShoppingCartSection;

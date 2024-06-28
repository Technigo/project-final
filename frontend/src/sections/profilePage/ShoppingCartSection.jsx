import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import "../../styling/sectionsStyling/profilePage/ShoppingCartSection.css";

const ShoppingCartSection = () => {
  const { cartItems, totalPrice, handleRemoveFromCart, fetchCartItems } =
    useCart();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (
      !startDate ||
      !endDate ||
      !deliveryAddress ||
      !customerEmail ||
      cartItems.length === 0
    ) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const orderItems = cartItems.map((item) => ({
        rental: item._id,
      }));

      const orderDetails = {
        startDate,
        endDate,
        deliveryAddress,
        customerEmail,
        items: orderItems,
      };

      const response = await axios.post(
        "https://project-final-rentals-api.onrender.com/api/orders",
        orderDetails
      );
      console.log("Order placed successfully", response.data);
      // Clear cart
      fetchCartItems();
      setStartDate("");
      setEndDate("");
      setDeliveryAddress("");
      setCustomerEmail("");
      setError("");
      setSuccessMessage("Order placed successfully");
    } catch (error) {
      setError("Failed to place order. Please try again.");
      console.error("Error placing order:", error);
    }
  };

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
        <h2 className="shoppingCartTitle">Your shopping Cart</h2>

        <div className="shoppingCartItems">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <div className="cartItemDetails">
                  <p className="cartItemName">{item.name}</p>
                  <h3 className="cartItemPrice">{item.price}</h3>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="removeButton"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <form className="shoppingCartForm" onSubmit={handleSubmitOrder}>
          <h2 className="deliveryTitle">Delivery</h2>
          {error && <p className="errorMessage">{error}</p>}
          <label className="rentalDateLabel">
            Fill in the date when you want to start renting the items: <br />
            <input
              type="date"
              required
              className="dateInput"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label className="rentalDateLabel">
            When do you want to return the items? <br />
            <input
              type="date"
              required
              className="dateInput"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>

          <label className="deliveryAdressText">
            Delivery address: <br />
            <input
              type="text"
              required
              className="deliveryAdress"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </label>

          <label className="emailText">
            Your Email: <br />
            <input
              type="email"
              required
              className="emailInput"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </label>

          <h3 className="totalPrice">Total: €{totalPrice}</h3>

          <button type="submit" className="sendOrderButton">
            Send Order
          </button>
          {successMessage && <p className="successMessage">{successMessage}</p>}
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

import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/cart");
      setCartItems(response.data.cart);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, []);

  const addToCart = async (item) => {
    try {
      await axios.post("http://localhost:8080/api/cart", { id: item._id });
      fetchCartItems();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleRemoveFromCart = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cart/${id}`
      );
      setCartItems(response.data.cart);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.error("Error removing from cart");
    }
  };

  const handleClearCart = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/api/cart");
      setCartItems(response.data.cart);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error clearing cart", error);
    }
  };

  const value = {
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    addToCart,
    handleRemoveFromCart,
    handleClearCart,
    fetchCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

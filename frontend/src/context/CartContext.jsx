import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch(
        "https://project-final-rentals-api.onrender.com/api/cart"
      );

      if (!response.ok) {
        throw new Error("Error fetching cart items");
      }

      const data = await response.json();
      setCartItems(data.cart);
      setTotalPrice(data.totalPrice);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await fetch(
        "https://project-final-rentals-api.onrender.com/api/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: item._id }),
        }
      );

      if (!response.ok) {
        throw new Error("Error adding to cart");
      }

      fetchCartItems();
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  const handleRemoveFromCart = async (id) => {
    try {
      const response = await fetch(
        `https://project-final-rentals-api.onrender.com/api/cart/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error removing from cart");
      }

      fetchCartItems();
    } catch (error) {
      console.error("Error removing from cart:", error.message);
    }
  };

  const handleClearCart = async () => {
    try {
      const response = await fetch(
        "https://project-final-rentals-api.onrender.com/api/cart",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error clearing cart");
      }

      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error clearing cart", error.message);
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

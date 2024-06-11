import { create } from "zustand";

export const useBagStore = create((set, get) => ({
  // Initial state for cart, an empty cart or the value from localStorage
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  // Helper function to save cart to localStorage
  saveCartToLocalStorage: (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  // Action to add product to cart & use set to update state
  addToCart: (product, selectedSize) =>
    set((state) => {
      // Check if the product already exists in the cart with the same size
      const existingProduct = state.cart.find(
        (item) => item._id === product._id && item.size === selectedSize
      );

      // Initialize updatedCart variable
      let updatedCart;

      // If product already exists in cart, increase its quantity
      if (existingProduct) {
        // Use map to create new array with updated quantities
        updatedCart = state.cart.map((item) =>
          item._id === product._id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product does not exist, add it to the cart with a quantity of 1
        updatedCart = [
          ...state.cart,
          { ...product, size: selectedSize, quantity: 1 },
        ];
      }

      // Save updated cart to localStorage
      get().saveCartToLocalStorage(updatedCart);

      // Return the new state
      return { cart: updatedCart };
    }),

  // Action to remove a product from the cart
  removeFromCart: (productId, selectedSize) =>
    set((state) => {
      // Filter out the product to remove it from the cart
      const updatedCart = state.cart.filter(
        (item) => !(item._id === productId && item.size === selectedSize)
      );

      // Save updated cart to LocalStorage
      get().saveCartToLocalStorage(updatedCart);

      // Return the new state
      return { cart: updatedCart };
    }),

  // Action to decrease the quantity of a product in the cart
  decreaseQuantity: (productId, selectedSize) =>
    set((state) => {
      // Use map to create a new array with the decreased quantity
      const updatedCart = state.cart
        .map((item) =>
          item._id === productId &&
          item.size === selectedSize &&
          item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Show only the ones that have a quantity above 1

      // Save updated cart to localStorage
      get().saveCartToLocalStorage(updatedCart);

      // Return the new state
      return { cart: updatedCart };
    }),

  // Function to clear all items from cart
  clearCart: () =>
    set(() => {
      // Create an empty cart array
      const updatedCart = [];

      // Save empty cart to localStorage
      get().saveCartToLocalStorage(updatedCart);

      // Return the new state
      return { cart: updatedCart };
    }),

  // Computed property to get the total number of items in the cart
  getTotalItems: () => {
    // Use get to access the current state, use reduce to sum up quantities of all items in cart
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Total price of items in the cart
  getTotalPrice: () => {
    // Use get to access current state
    // reduce is to sum up total price of all items in cart
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

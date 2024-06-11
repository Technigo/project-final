import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductsStore = create(
  persist(
    (set, get) => ({
  productsData: {},
  singleProduct: {},
  loadingProduct: false,
  shoppingCart: [],
  totalPrice: 0,
  addedProduct: [],
  popupIsVisible: false,

  
  setShoppingCart: (product, quantity) => {
    const currentCart = get().shoppingCart;
    const productIndex = currentCart.findIndex(
      (item) => item.product._id === product._id
    );
  
    if (productIndex >= 0) {
      // Update the quantity of the existing product in the cart
      const updatedCart = [...currentCart];
      updatedCart[productIndex].quantity += quantity;
  
      // Ensure quantity doesn't go below zero
      updatedCart[productIndex].quantity = Math.max(
        0,
        updatedCart[productIndex].quantity
      );
  
      set({ shoppingCart: updatedCart, addedProduct: [product], popupIsVisible: true });
    } else {
      // Add the new product to the cart
      set({ shoppingCart: [...currentCart, { product, quantity }], addedProduct: [product], popupIsVisible: true });
    }
  
    // Recalculate total price and update store
    const price = get().shoppingCart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
    const roundedPrice = Math.ceil(price * 100) / 100; // Round up to 2 decimal places
    set({ totalPrice: roundedPrice });

    setTimeout(() => set({ popupIsVisible: false, addedProduct: [] }), 10000);

      },
  
      updateCart: (newQuantity, productId) => {
        const currentCart = get().shoppingCart;
        const productIndex = currentCart.findIndex(item => item.product._id === productId);
    
        if (productIndex >= 0) {
          const updatedCart = [...currentCart];
          updatedCart[productIndex].quantity = Math.max(1, newQuantity);
          set({ shoppingCart: updatedCart });
    
          // Recalculate total price and update store
          const price = updatedCart.reduce((total, item) => {
            return total + item.product.price * item.quantity;
          }, 0); 
          const roundedPrice = Math.ceil(price * 100) / 100; // Round up to 2 decimal places
          set({ totalPrice: roundedPrice });
        }
      },

  removeAllByIdFromCart: (productId) => {
    const currentCart = get().shoppingCart;
  
    // Filter out all products with the specified ID
    const updatedCart = currentCart.filter(item => item.product._id !== productId);
  
    // Calculate total price
    const price = updatedCart.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    const roundedPrice = Math.ceil(price * 100) / 100; // Round up to 2 decimal places
    set({ shoppingCart: updatedCart, totalPrice: roundedPrice });
  },
  
  removeAllFromCart: () => {
    set({ shoppingCart: [], totalPrice: 0 });
  },

  fetchProducts: async () => {
    set({ loadingProduct: true });
    const URL = "https://project-final-glim.onrender.com/products";
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
      console.log(data);
      set({ productsData: data });
    } catch (error) {
      console.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProduct: false });
    }
  },

  fetchSingleProduct: async (id) => {
    set({ loadingProduct: true });

    const URL_singleProduct = `https://project-final-glim.onrender.com/products/${id}`;
    try {
      const response = await fetch(URL_singleProduct, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
      console.log("Fetch single product", data);
      set({ singleProduct: data });
    } catch (error) {
      console.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProduct: false });
    }
  },
}),
{
  name: "Product-storage",
}
)
);
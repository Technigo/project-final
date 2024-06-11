//import { create } from "zustand";

//export const useCartStore = create((set, get) => ({
  // Initial state for cart, an empty cart
 // cart: [],
  // Action to add product to cart & use set to update state
  //addToCart: (product, selectedSize) =>
    //set((state) => {
      // Check if the product already exists in the cart with the same size

     // const existingProduct = state.cart.find(
        //(item) => item._id === product._id && item.size === selectedSize
      //);
      // If product already exists in cart, increase its quantity
      //if (existingProduct) {
       // return {
          // Use map to create new array with updated quantities
        //  cart: state.cart.map((item) =>
          //  item._id === product._id && item.size === selectedSize
           //   ? { ...item, quantity: item.quantity + 1 }
           //   : item
       //   ),
       // };
     // } else {
        // If the product does not exist, add it to the cart with a quantity of 1
        //return {
          //cart: [
           // ...state.cart,
          //  { ...product, size: selectedSize, quantity: 1 },
          //],
        //};
        /* const existingProductIndex = state.cart.findIndex(
        (item) => item._id === product._id && item.size === selectedSize
      );

      if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity++;
        return { cart: updatedCart };
      } else {
        // Product does not exist in cart, add it with quantity 1
        return {
          cart: [
            ...state.cart,
            { ...product, size: selectedSize, quantity: 1 },
          ],
        }; */
    //  }
   // }),

  // Action to remove a product from the cart
  //removeFromCart: (productId, selectedSize) =>
    //set((state) => ({
      // Filter out the product to remove it from the cart
     // cart: state.cart.filter(
     //   (item) => !(item._id === productId && item.size === selectedSize)
     // ),
   // })),

  // Action to decrease the quantity of a product in the cart
  //decreaseQuantity: (productId, selectedSize) =>
    //set((state) => ({
      // Use map to create a new array with the decreased quantity
     // cart: state.cart
        //.map((item) =>
        //  item._id === productId &&
         // item.size === selectedSize &&
         // item.quantity > 1
           // ? { ...item, quantity: item.quantity - 1 }
           // : item
      //  )
        //.filter((item) => item.quantity > 0), // Show only the ones that have a quantity above 1
  //  })),

  // Function to clear all items from cart
 // clearCart: () => set({ cart: [] }),

  // Computed property to get the total number of items in the cart
 // getTotalItems: () => {
    // Use get to access the current state, use reduce to sum up quantities of all items in cart
   // return get().cart.reduce((total, item) => total + item.quantity, 0);
 // },

  // Total price of items in the cart
  //getTotalPrice: () => {
    // Use get to access current state
    // reduce is to sum up total price of all items in cart
  //  return get().cart.reduce(
   //   (total, item) => total + item.price * item.quantity,
  //    0
  //  );
 // },
//}));

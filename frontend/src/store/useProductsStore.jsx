import { useParams } from "react-router-dom";
import { create } from "zustand";

export const useProductsStore = create((set, get) => ({
  products: {},
  singleProduct: {},
  loadingProduct: false,
  URL: "https://project-final-glim.onrender.com/products",
  URL_singleProduct: `https://project-final-glim.onrender.com/products/${product}`,

  fetchProducts: async () => {
    set({ loadingProduct: true });
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
      set({ products: data });
    } catch (error) {
      console.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProducts: false });
    }
  },

  fetchSingleProduct: async () => {
    set({ loadingProduct: true });
    const { product } = useParams();
    try {
      const response = await fetch(URL_singleProduct, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
      console.log(data);
      set({ singleProduct: data });
    } catch (error) {
      console.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProducts: false });
    }
  },
}));

import { useParams } from "react-router-dom";
import { create } from "zustand";

export const useProductsStore = create((set, get) => ({
  productsData: {},
  singleProduct: {},
  loadingProduct: false,

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
      console.log(data);
      set({ singleProduct: data.product });
    } catch (error) {
      console.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProduct: false });
    }
  },
}));

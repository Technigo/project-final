import { create } from "zustand";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const FRONTEND_URL = import.meta.env.FRONTEND_ORIGIN;

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  categories: [],
  product: null,
  getAllProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${BACKEND_URL}/products`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": FRONTEND_URL,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Fetching network error");
      }
      const data = await response.json();
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ].sort();
      set({ products: data, categories: uniqueCategories });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
  getSingleProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${BACKEND_URL}/products/${id}`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": FRONTEND_URL,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Fetching single product error");
      }
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));

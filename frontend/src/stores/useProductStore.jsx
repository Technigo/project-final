import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const FRONTEND_URL = import.meta.env.FRONTEND_ORIGIN;

export const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      loading: false,
      error: null,
      categories: [],
      product: null,
      // favoriteProducts: [],
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
      likeProduct: async (id) => {
        set({ error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/products/${id}`, {
            method: "PATCH",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Unable to like this product error");
          }
          // const data = await response.json();
          // set((state) => ({
          //   favoriteProducts: [...state.favoriteProducts, id],
          // }));
          console.log("like successful!");
        } catch (error) {
          set({ error: error });
        }
      },
      unlikeProduct: async (id) => {
        try {
          const response = await fetch(`${BACKEND_URL}/products/${id}`, {
            method: "PATCH",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ unlike: true }),
          });
          if (!response.ok) {
            throw new Error("Unable to like this product error");
          }
          // const data = await response.json();
          // set({ product: data });
          // set((state) => ({
          //   favoriteProducts: [
          //     ...state.favoriteProducts.filter((productID) => productID !== id),
          //   ],
          // }));
          console.log("Unlike successful!");
        } catch (error) {
          set({ error: error });
        }
      },
    }),
    {
      name: "product-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

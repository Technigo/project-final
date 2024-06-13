import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const FRONTEND_URL = import.meta.env.FRONTEND_ORIGIN;

export const useProductStore = create(
  persist(
    (set) => ({
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
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          const uniqueCategories = [
            ...new Set(data.map((product) => product.category)),
          ].sort();
          set({ products: data, categories: uniqueCategories });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to fetch all the templates"
                : error.message,
          });
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
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({ product: data });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to fetch this template"
                : error.message,
          });
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
            const data = await response.json();
            throw new Error(data.message);
          }
          console.log("like successful!");
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to save favorite"
                : error.message,
          });
        }
      },
      unlikeProduct: async (id) => {
        set({ error: null });
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
            const data = await response.json();
            throw new Error(data.message);
          }
          console.log("Unlike successful!");
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to remove from the favorite"
                : error.message,
          });
        }
      },
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

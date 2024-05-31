import { create } from "zustand";

export const useProductsStore = create((set, get) => ({
  products: {},
  /* title: "",
  brand: "",
  category: "",
  subcategory: "",
  description: "",
  price: null,
  allergie: [],
  pros: [],
  hairShape: "",
  hairMoisture: "",
  skinType: [],
  instructions: "",
  size: "",
  image: "", */
  loadingProduct: false,

  fetchProducts: async () => {
    set({ loadingProduct: true });
    try {
      const response = await fetch(url, {
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
}));

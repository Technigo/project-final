import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const FRONTEND_URL = import.meta.env.FRONTEND_ORIGIN;

export const useUserStore = create(
  persist(
    (set, get) => ({
      userId: null,
      accessToken: null,
      username: null,
      email: null,
      loading: false,
      error: null,
      cart: [],
      favorite: [],
      handleNonLoginCart: (productId, action) => {
        switch (action) {
          case "remove":
            set((state) => ({
              cart: state.cart.filter((itemId) => itemId !== productId),
            }));
            break;
          default:
            set((state) => ({
              cart: [...state.cart, productId],
            }));
            break;
        }
      },
      clearNonLoginCart: () => set({ cart: [] }),
      resetError: () => set({ error: null }),
      logout: () =>
        set({
          userId: null,
          accessToken: null,
          username: null,
          email: null,
          favorite: [],
          cart: [],
        }),
      clearCart: async () => {
        try {
          const response = await fetch(
            `${BACKEND_URL}/users/${get().userId}/cart`,
            {
              method: "DELETE",
              headers: {
                "Access-Control-Allow-Origin": FRONTEND_URL,
                "Content-Type": "application/json",
                withCredentials: true,
                Authorization: get().accessToken,
              },
            },
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({ cart: data.cartItems });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to clear cart"
                : error.message,
          });
        }
      },
      logInUser: async (formData) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/users/login`, {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              cartItems: get().cart,
            }),
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({
            userId: data.id,
            accessToken: data.accessToken,
          });
          return true;
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to log in"
                : error.message,
          });
        } finally {
          set({ loading: false });
        }
      },
      registerUser: async (formData) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/users/signup`, {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({
            userId: data.id,
            accessToken: data.accessToken,
          });
          return true;
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to sign up"
                : error.message,
          });
        } finally {
          set({ loading: false });
        }
      },
      displayUserInfo: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/users/${get().userId}`, {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
              withCredentials: true,
              Authorization: get().accessToken,
            },
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({
            username: data.message.username,
            email: data.message.email,
            favorite: data.message.favoriteTemplates,
            cart: data.message.cartItems,
          });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to display your account"
                : error.message,
          });
        } finally {
          set({ loading: false });
        }
      },
      deleteAccount: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/users/${get().userId}`, {
            method: "DELETE",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
              withCredentials: true,
              Authorization: get().accessToken,
            },
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({ userId: null, username: null, email: null, accessToken: null });
          return true;
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to delete your account"
                : error.message,
          });
        } finally {
          set({ loading: false });
        }
      },
      saveFavorites: async (productId, action) => {
        try {
          const response = await fetch(
            `${BACKEND_URL}/users/${get().userId}/favorites`,
            {
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": FRONTEND_URL,
                "Content-Type": "application/json",
                withCredentials: true,
                Authorization: get().accessToken,
              },
              body: JSON.stringify({
                productId: productId,
                remove: action ? true : false,
              }),
            },
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({ favorite: data.favoriteTemplates });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to save favorite"
                : error.message,
          });
        }
      },
      handleCart: async (productId, action) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(
            `${BACKEND_URL}/users/${get().userId}/cart`,
            {
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": FRONTEND_URL,
                "Content-Type": "application/json",
                withCredentials: true,
                Authorization: get().accessToken,
              },
              body: JSON.stringify({
                productId: productId,
                remove: action === "remove",
              }),
            },
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          set({ cart: data.cartItems });
        } catch (error) {
          set({
            error:
              error.message === "Failed to fetch"
                ? "Unable to modify the cart"
                : error.message,
          });
        } finally {
          set({ loading: false });
        }
      },
    }),

    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        userId: state.userId,
        accessToken: state.accessToken,
        username: state.username,
        email: state.email,
        cart: state.cart,
        favorite: state.favorite,
      }),
    },
  ),
);

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
      logInUser: async (formData) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BACKEND_URL}/users/login`, {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok) {
            throw new Error("Login error");
          }

          const data = await response.json();
          set({ userId: data.id, accessToken: data.accessToken });
          console.log("login successfully!");
          console.log(data);
          return true;
        } catch (error) {
          set({ error: error, userId: null, accessToken: null });
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
          if (!response.ok) {
            throw new Error("Signup error");
          }
          console.log("Sign up successfully!");

          const data = await response.json();
          console.log(data);
          return true;
        } catch (error) {
          set({ error: error });
        } finally {
          set({ loading: false });
        }
      },
      displayUserInfo: async () => {
        set({ loading: true, error: null });
        try {
          // const id = await get().userId;
          // console.log("trying to connect with backend");
          const response = await fetch(`${BACKEND_URL}/users/${get().userId}`, {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
              withCredentials: true,
              Authorization: get().accessToken,
            },
          });
          if (!response.ok) {
            throw new Error("Display user info error");
          }
          // console.log(response);
          const data = await response.json();
          set({ username: data.message.username, email: data.message.email });
          console.log("user info displayed successfully!");
          // console.log(data);
        } catch (error) {
          set({ error: error, username: null, email: null });
        } finally {
          set({ loading: false });
        }
      },
      deleteAccount: async () => {
        set({ loading: true, error: null });
        try {
          // const id = await get().userId;
          // console.log("trying to connect with backend");
          const response = await fetch(`${BACKEND_URL}/users/${get().userId}`, {
            method: "DELETE",
            headers: {
              "Access-Control-Allow-Origin": FRONTEND_URL,
              "Content-Type": "application/json",
              withCredentials: true,
              Authorization: get().accessToken,
            },
          });
          if (!response.ok) {
            throw new Error("Delete user  error");
          }
          // console.log(response);
          const data = await response.json();
          if (!data.success) throw new Error("Delete user failed!");
          console.log("user deleted  successfully!");
          set({ userId: null, username: null, email: null, accessToken: null });
          return true;
          // console.log(data);
        } catch (error) {
          set({ error: error });
        } finally {
          set({ loading: false });
        }
      },
    }),
    
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

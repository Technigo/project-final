import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: {},
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      address: {
        street: "",
        postalCode: "",
        city: "",
        country: "",
      },
      password: "",
      accessToken: "",
      allergies: [],
      pros: [],
      hair: {
        shape: "",
        moisture: "",
      },
      hairShape: "",
      hairMoisture: "",
      skinType: [],
      signedUp: false,
      loadingUser: false,
      loggedIn: false,
      showWelcomePopup: false,
      loggedOut: false,
      automaticLogOut: false,
      deletedUser: false,

      //Functions to update userInfo
      setFirstName: (Input) => set({ firstName: Input }),
      setLastName: (Input) => set({ lastName: Input }),
      setEmail: (Input) => set({ email: Input }),
      setAddress: (Input) => set({ address: Input }),
      setPassword: (Input) => set({ password: Input }),
      setAllergies: (Input) => set({ allergies: Input }),
      setPros: (Input) => set({ pros: Input }),
      setHair: (Input) => set({ hair: Input }),
      setSkinType: (Input) => set({ skinType: Input }),
      //messages
      setSignedUp: (input) => set({ signedUp: input }),
      setShowWelcomePopup: (input) => set({ showWelcomePopup: input }),
      setLoggedOut: (input) => set({ loggedOut: input }),
      setAutomaticLogOut: (input) => set({ automaticLogOut: input }),
      setDeletedUser: (input) => set({ deletedUser: input }),

      //Register user
      registerUser: async (
        firstName,
        lastName,
        email,
        address,
        password,
        allergies,
        pros,
        hair,
        skinType
      ) => {
        set({ loadingUser: true });
        const URL_register =
          "https://project-final-glim.onrender.com/users/register";
        try {
          const response = await fetch(URL_register, {
            method: "POST",
            body: JSON.stringify({
              firstname: firstName,
              lastname: lastName,
              email: email,
              address: address,
              password: password,
              allergies: allergies,
              pros: pros,
              hair: hair,
              skin: skinType,
            }),
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            throw new Error("Could not fetch");
          }
          const data = await response.json();
          set({ accessToken: data.accessToken });
        } catch (error) {
          console.error("error:", error);
          set({ error: error });
        } finally {
          set({ loadingUser: false });
          set({ signedUp: true });
        }
      },

      fetchUser: async (id, accessToken) => {
        set({ loadingUser: true });
        const URL = `https://project-final-glim.onrender.com/users/profile/${id}`;
        try {
          const response = await fetch(URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          });
          if (!response.ok) {
            throw new Error("Could not fetch user");
          }
          const data = await response.json();
          set({
            user: data,
            loggedIn: true,
            showWelcomePopup: true,
          });
        } catch (error) {
          console.error("error:", error);
          set({ error: error });
        } finally {
          set({ loadingUser: false });
        }
      },

      loginUser: async (email, password) => {
        set({ loadingUser: true, loginError: false });
        const URL_login = "https://project-final-glim.onrender.com/users/login";
        try {
          const response = await fetch(URL_login, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            throw new Error("could not fetch");
          }
          const data = await response.json();

          if (data.accessToken) {
            set({
              userId: data.id,
              accessToken: data.accessToken,
            });
            await get().fetchUser(data.id, data.accessToken);
          }
        } catch (error) {
          console.error("error in login:", error);
          set({ error: error, loginError: true });
        } finally {
          set({ loadingUser: false });
        }
      },

      //This function is not used in our code yet. Work in progress.
      updateUser: async (userId, accessToken, updatedFields) => {
        /* set({ loadingUser: true }); */
        const URL = `https://project-final-glim.onrender.com/users/profile/${userId}`;
        try {
          const response = await fetch(URL, {
            method: "PATCH",
            body: JSON.stringify({
              firstname: updatedFields.firstname,
              lastname: updatedFields.lastname,
              email: updatedFields.email,
              /* street: updatedFields.street, */
              /*postalCode: updatedFields.postalCode,
              city: updatedFields.city,
              country: updatedFields.country,
              allergies: updatedFields.allergies,
              pros: updatedFields.pros,
              moisture: updatedFields.moisture,
              skin: updatedFields.skin, */
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          });
          if (!response.ok) {
            const errorText = await response.text(); // Get the error message
            throw new Error(errorText);
          }
          const data = await response.json();
          set({
            user: data,
          });
        } catch (error) {
          console.error("error updating user:", error);
          set({ error: error });
        } finally {
          /*  set({ loadingUser: false }); */
        }
      },

      logoutUser: () => {
        set({
          user: {},
          userId: "",
          accessToken: "",
          loggedIn: false,
          loggedOut: true,
        });
      },

      deleteUser: async (userId, accessToken) => {
        /* set({ loadingUser: true }); */
        const URL = `https://project-final-glim.onrender.com/users/profile/${userId}`;
        try {
          const response = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          });

          if (!response.ok) {
            const errorText = await response.text(); // Get the error message
            throw new Error(errorText);
          }

          const data = await response.json();
          set({
            loggedIn: false,
            /* loggedOut: true, */
            deletedUser: true,
            showWelcomePopup: true,
          });
        } catch (error) {
          console.error("error:", error);
          set({ error: error });
        } finally {
          /*  set({ loadingUser: false }); */
        }
      },
    }),
    {
      name: "User-storage",
    }
  )
);

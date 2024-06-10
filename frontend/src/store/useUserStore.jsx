import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      //URL_userId: `https://project-final-glim.onrender.com/users/profile/${id}`,
      user: {},
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      address: {},
      password: "",
      accessToken: "",
      allergies: [],
      pros: [],
      hairShape: "",
      hairMoisture: "",
      skinType: [],
      loadingUser: false,
      loggedIn: false,

      //Functions to update userInfo
      setFirstName: (Input) => set({ firstName: Input }),
      setLastName: (Input) => set({ lastName: Input }),
      setEmail: (Input) => set({ email: Input }),
      setAddress: (Input) => set({ address: Input }),
      setPassword: (Input) => set({ password: Input }),
      setAllergies: (Input) => set({ allergies: Input }),
      setPros: (Input) => set({ pros: Input }),
      setHairShape: (Input) => set({ hairShape: Input }),
      setHairMoisture: (Input) => set({ hairMoisture: Input }),
      setSkinType: (Input) => set({ skinType: Input }),

      //Register user
      registerUser: async (
        firstName,
        lastName,
        email,
        address,
        password,
        allergies,
        pros,
        hairShape,
        hairMoisture,
        skinType
      ) => {
        set({ loadingUser: true });
        const URL_register =
          "https://project-final-glim.onrender.com/users/register";
        try {
          const response = await fetch(URL_register, {
            method: "POST",
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              address: address,
              password: password,
              allergies: allergies,
              pros: pros,
              hair: hairShape,
              hairMoisture,
              skin: skinType,
            }),
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            throw new Error("Could not fetch");
          }
          const data = await response.json();
          console.log(data);
          set({ accessToken: data.accessToken });
        } catch (error) {
          console.error("error:", error);
          set({ error: error });
        } finally {
          set({ loadingUser: false });
        }
      },
      loginUser: async (email, password) => {
        set({ loadingUser: true });
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
              loggedIn: true,
              userID: data._id,
              accessToken: data.accessToken,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              address: data.address,
              allergies: data.allergies,
              pros: data.pros,
              hairShape: data.hair.shape,
              hairMoisture: data.hair.moisture,
              skinType: data.skin,
            });
            /* localStorage.setItem("access_token", data.accessToken);
          localStorage.setItem("user_id", data._id); */
          }
        } catch (error) {
          console.error("error in login:", error);
          set({ error: error });
        } finally {
          set({ loadingUser: false });
        }
      },
    }),
    {
      name: "User-storage",
    }
  )
);

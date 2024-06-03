import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      URL_login: "https://project-final-glim.onrender.com/users/login",
      URL_register: "https://project-final-glim.onrender.com/users/register",
      URL_userId: `https://project-final-glim.onrender.com/users/profile/${id}`,
      user: {},
      userId: "",
      firstname: "",
      lastname: "",
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
      setFirstName: (Input) => set({ firstname: Input }),
      setLastName: (Input) => set({ lastname: Input }),
      setEmail: (Input) => set({ email: Input }),
      setAddress: (Input) => set({ address: Input }),
      setPassword: (Input) => set({ password: Input }),
      setAllergies: (Input) => set({ allergies: Input }),
      setPros: (Input) => set({ pros: Input }),
      sethairShape: (Input) => set({ hairShape: Input }),
      setHairMoisture: (Input) => set({ hairMoisture: Input }),
      setSkinType: (Input) => set({ skinType: Input }),

      //Register user
      registerUser: async (
        firstname,
        lastname,
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
        try {
          const response = await fetch(URL_register, {
            method: "POST",
            body: JSON.stringify({
              firstname: firstname,
              lastname: lastname,
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
              firstname: data.firstname,
              lastname: data.lastname,
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

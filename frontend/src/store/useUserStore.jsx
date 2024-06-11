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
      setHair: (Input) => set({ hair: Input }),
      // setHairShape: (Input) => set({ hairShape: Input }),
      // setHairMoisture: (Input) => set({ hairMoisture: Input }),
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
        hair,
        // hairShape,
        // hairMoisture,
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
              // hairShape: hairShape,
              // hairMoisture: hairMoisture,
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
          console.log("Login respons data: ", data);
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
              hair: data.hair,
              // hairShape: data.hair.shape,
              // hairMoisture: data.hair.moisture,
              skinType: data.skin,
            });
            console.log("Hi, ", data.message);
            // localStorage.setItem("access_token", data.accessToken);
            // localStorage.setItem("user_id", data._id);
          }
        } catch (error) {
          console.error("error in login:", error);
          set({ error: error });
        } finally {
          set({ loadingUser: false });
        }
      },
      logoutUser: () => {
        set({
          loggedIn: false,
          userID: null,
          accessToken: null,
          firstname: null,
          lastname: null,
          email: null,
          address: {},
          allergies: [],
          pros: [],
          hair: {},
          // hairShape: null,
          // hairMoisture: null,
          skinType: null,
        });
      },
    }),
    {
      name: "User-storage",
    }
  )
);

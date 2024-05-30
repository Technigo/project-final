import { create } from "zustand";

export const useUserStore = create((set, get) => ({
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

  //Register user fetch
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
      const response = await fetch(url, {
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
      set({ userID: data._i, accessToken: data.accessToken });
    } catch (error) {
      onsole.error("error:", error);
      set({ error: error });
    } finally {
      set({ loadingProducts: false });
    }
  },
}));

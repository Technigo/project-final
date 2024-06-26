import api from "../../axiosConfig";

const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const signup = async (username, password, role) => {
  try {
    const response = await api.post("/users", { username, password, role });
    const { accessToken } = response.data;

    setAuthToken(accessToken);
    return response.data;
  } catch (error) {
    console.error(
      "Signup failed:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post("/sessions", { username, password });
    const { token } = response.data;
    setAuthToken(token);
    return response.data;
  } catch (error) {
    console.error(
      "Login failed:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found");
    }
    const response = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch profile:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const updateProfile = async (userData) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await api.put("/profile", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to update profile:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

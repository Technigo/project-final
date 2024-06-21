import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUsername = localStorage.getItem("username");

    console.log("Stored token:", storedToken);
    console.log("Stored username", storedUsername);

    if (storedToken && storedUsername) {
      setToken(storedToken);
      setUsername(storedUsername);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    setIsAuthenticated(true);
    localStorage.setItem("authToken", newToken);
    localStorage.setItem("username", newUsername);
  };

  const logout = () => {
    setToken(null);
    setUsername("");
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const value = {
    isAuthenticated,
    token,
    username,
    login,
    logout,
  };

  console.log("Authprovider value:", value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

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
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    setUsername(username);
    setIsAuthenticated(true);
    localStorage.setItem("authToken", newToken);
    localStorage.setItem("username", username);
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

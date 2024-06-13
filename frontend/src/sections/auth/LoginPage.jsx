import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styling/sectionsStyling/authPages/AuthPages.css";
import { LOGIN_URL } from "../../apis/authApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      const response = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      console.log("Login successfull:", response.data);

      const token = response.data.token;
      if (token) {
        login(token);
        navigate("/rentals");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <h2 className="authTitle">Sign in</h2>
        {error && <p className="authError">{error}</p>}
        <label className="authLabel">
          Email:
          <input
            type="email"
            required
            className="authInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="authLabel">
          Password:
          <input
            type="password"
            required
            className="authInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="authButtonWrapper">
          <button type="submit" className="authButton">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

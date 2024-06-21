import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "../../styling/sectionsStyling/authPages/AuthPages.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "https://project-final-auth-api.onrender.com/api/register",
        {
          username,
          email,
          password,
        }
      );
      console.log("Registration response:", response.data);

      if (response.status === 201) {
        const { token } = response.data;
        if (token) {
          login(token);
          navigate("/rentals");
        }
      } else {
        setError("Registration failed. Please try again");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <h2 className="authTitle">Register</h2>
        {error && <p className="authError">{error}</p>}
        <label className="authLabel">
          Username:
          <input
            type="text"
            required
            className="authInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

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

export default RegisterPage;

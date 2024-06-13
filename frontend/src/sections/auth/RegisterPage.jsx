import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "../../styling/sectionsStyling/authPages/AuthPages.css";
import { useNavigate } from "react-router-dom";
// import { REGISTER_URL } from "../../apis/authApi";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
      });
      console.log("Registration successfull:", response.data);

      const token = response.data.token;
      if (token) {
        login(token);
        navigate("/rentals");
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
          Name:
          <input
            type="text"
            required
            className="authInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

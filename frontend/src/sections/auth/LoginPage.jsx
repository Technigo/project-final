import { useState } from "react";
import axios from "axios";
import "../../styling/sectionsStyling/authPages/AuthPages.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      console.log("Login successfull:", response.data);
      // Store token in localStorage
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <h2 className="authTitle">Sign in</h2>
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

import { useState } from "react";
import axios from "axios";
import "../../styling/sectionsStyling/authPages/AuthPages.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
      });
      console.log("Registration successfull:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <h2 className="authTitle">Register</h2>
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

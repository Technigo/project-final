import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import signUpImage from "/images/signUp.jpg";
import { Login } from "./Login";

export const SignUpPage = () => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Listener");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      let response;
      if (isLogin) {
        console.log("Sending login request:", { username, password });
        response = await axios.post(
          "https://project-final-rmn2.onrender.com/api/sessions",
          { username, password }
        );
        console.log("Login response:", response.data);
        /*  const { accessToken } = response.data;
        localStorage.setItem("authToken", accessToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`; */
      } else {
        console.log("Sending signup request:", { username, password, role });
        response = await axios.post(
          "https://project-final-rmn2.onrender.com/api/users",
          { username, password, role }
        );
        const { accessToken } = response.data;
        localStorage.setItem("authToken", accessToken);
        console.log("Signup response:", response.data);
      }
      navigate("/profile");
    } catch (error) {
      console.error("Error during authentication:", error);
      setError(
        error.response?.data?.error ||
          "An error occurred during authentication."
      );
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev); // Toggle between sign-up and login
    setError(null); // Reset error when toggling forms
  };

  return (
    <div className="container mx-auto">
      <img
        src={signUpImage}
        alt="Role"
        className="mb-4 rounded-full"
        style={{ width: "150px", height: "150px" }}
      />
      <h1 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Sign up and choose your role"}
      </h1>
      <div className="float-left">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLogin ? (
          <Login />
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              ref={usernameInputRef}
              className="block mb-4 px-4 py-2 rounded border border-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
              name="password"
              className="block mb-4 px-4 py-2 rounded border border-gray-300"
            />
            {!isLogin && (
              <div className="mb-4">
                <label className="block mb-2 font-bold">Role</label>
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="block w-full px-4 py-2 rounded border border-gray-300"
                >
                  <option value="Listener">Listener</option>
                  <option value="Seeker">Seeker</option>
                </select>
              </div>
            )}
            <button
              type="submit"
              className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        )}
        <p className="mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={toggleForm}
            className="text-primary underline focus:outline-none"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

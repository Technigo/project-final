import api from "../../axiosConfig";
import { useState, useRef } from "react";
import signUpImage from "/images/signUp.jpg";

export const SignUpPage = ({ onSignupSuccess }) => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Listener");
  /*  const [isLogin, setIsLogin] = useState(false); */

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      const response = await api.post("/users", { username, password, role });
      const { accessToken } = response.data;
      localStorage.setItem("authToken", accessToken);
      console.log("Signup response:", response.data);
      onSignupSuccess();
    } catch (error) {
      console.error("Error during signup:", error);
      setError(
        error.response?.data?.error ||
          "An error occurred during signup. Please try again."
      );
    }
  };

  return (
    <div className="container mx-auto">
      <img
        src={signUpImage}
        alt="Role"
        className="mb-4 rounded-full"
        style={{ width: "150px", height: "150px" }}
      />
      <h1 className="text-2xl font-bold mb-4">Sign up and choose your role</h1>
      <div className="float-left">
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
          <button
            type="submit"
            className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-primary underline focus:outline-none"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

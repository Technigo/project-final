import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      const response = await axios.post(
        "https://project-final-rmn2.onrender.com/api/sessions",
        {
          username,
          password,
        }
      );
      const { token } = response.data;

      localStorage.setItem("authToken", token);

      // Redirect to profile page
      navigate("/profile");
    } catch (error) {
      console.error("Error logging in:", error);
      setError(
        error.response?.data?.error || "An error occurred during login."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-boldmb-4">Log In</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            ref={usernameInputRef}
            className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
            className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

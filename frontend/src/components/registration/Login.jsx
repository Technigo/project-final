import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axiosConfig";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await api.post("/sessions", formData);
      if (response.status === 200) {
        const token = response.data.token;
        setFormData({ username: "", password: "" });
        // Store access token in localStorage
        localStorage.setItem("token", token);
        // Navigate to the profile page
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error:", error);
      // Sign-in failed
      setError(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-20">
        {/*         <h1 className="text-4xl font-boldmb-4">Log In</h1>
         */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
              minLength={6}
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
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

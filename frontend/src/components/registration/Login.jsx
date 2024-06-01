import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/api/sessions", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-20">
        {/*         <h1 className="text-4xl font-boldmb-4">Log In</h1>
         */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
          />
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

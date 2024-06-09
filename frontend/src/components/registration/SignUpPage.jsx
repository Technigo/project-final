import api from "../../axiosConfig";
import { useState, useRef } from "react";
import signUpImage from "/images/signUp.jpg";
import { useModal } from "./ModalContext";
import { Login } from "./Login";

export const SignUpPage = ({ onSignupSuccess }) => {
  const { hideModal, showModal } = useModal();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Listener");

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
      hideModal();
    } catch (error) {
      console.error("Error during signup:", error);
      setError(
        error.response?.data?.error ||
          "An error occurred during signup. Please try again."
      );
    }
  };

  return (
    <div className="fixed inset-0 items-center justify-center bg-dark bg-opacity-50 z-50 flex">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl flex flex-col md:flex-row">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-secondary"
          onClick={hideModal}
        >
          x
        </button>
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={signUpImage}
            alt="Sign up"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              ref={usernameInputRef}
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
              name="password"
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="mb-4">
              <label className="block mb-2 font-bold">Role</label>
              <select
                value={role}
                onChange={handleRoleChange}
                className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                style={{
                  height: "44px",
                  backgroundSize: "1.5rem 1.5rem",
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <option value="Listener">Listener</option>
                <option value="Seeker">Seeker</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary w-full"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center md:text-left">
            Already have an account?{" "}
            <button
              onClick={() => showModal(<Login />)}
              className="text-primary underline focus:outline-none"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

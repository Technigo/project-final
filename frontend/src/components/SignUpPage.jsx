import { useEffect, useRef } from "react";
import listenerImage from "/images/listener.jpg";
import seekerImage from "/images/seeker.jpg";

export const SignUpPage = ({ type }) => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Signing up...");
  };

  return (
    <div className="container mx-auto">
      <img
        src={type === "Listener" ? listenerImage : seekerImage}
        alt={type}
        className="float-left mr-4"
      />
      <div className="float-left">
        <h1 className="text-2xl font-bold mb-4">Sign up as {type}</h1>
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
            className="block mb-4 px-4 py-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

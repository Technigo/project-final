/* import { useModal } from "./ModalContext"; */

export const Login = ({ navigate }) => {
  const { hideModal, showModal } = useModal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", {
        username,
        password,
      });
      console.log("Login response:", response.data);
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      console.log("Token saved to localStorage:", token);
      // Redirect to profile or another page
      navigate("/profile");
      hideModal();
    } catch (err) {
      setError("Login failed. Please check your credentials.");
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
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <p className="mt-4">
          Don't have an account?{" "}
          <button
            onClick={() =>
              showModal(<SignUpPage onSignupSuccess={() => hideModal()} />)
            }
            className="text-primary underline focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

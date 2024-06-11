import { Footer } from "../components/Footer";
import { useUserStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loading, error, password, email, userLogin, setPassword, setEmail } =
    useUserStore();

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await userLogin()
    if(!error){
      navigate("/logged")
    }else {
      navigate("/signup")
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <h1>Login</h1>
          <div>
            <label htmlFor="email">email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>
          Or you can sign up <a href="/signup">here</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

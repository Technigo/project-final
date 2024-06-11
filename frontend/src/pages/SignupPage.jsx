import { useUserStore } from "../store/useStore";
import { useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Signup = () => {
  const {
    loading,
    error,
    name,
    password,
    email,
    userSignup,
    setName,
    setPassword,
    setEmail,
    // authToken
  
  } = useUserStore();

  const [confirmPassword, setConfirmPassowrd] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
       return alert ("Password do not match."); 
    }
    await userSignup(name, email, password);
    if(!error){
        navigate("/logged")
    }
  }

//   useEffect(() => {
//     if(authToken) {
//         navigate("/logged")
//     }
//   }, [navigate])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h2>Ready for an advanture?</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="signup-wrapper">
          <h3>Sign up</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email：</label>
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
          <div>
            <label htmlFor="confirm-password">Re-enter Password：</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassowrd(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <div>
            <input type="checkbox" id="term" name="term" required />
            <label htmlFor="term">I have read the term of use</label>
          </div>
          <button type="submit" >Sign Up</button>
        </form>
      </div>
      <div>
        <p>
          Already have an account? Login <a href="/login">here</a>
        </p>
      </div>
      <Footer />
    </>
  );
};
//onClick={() => <Navigate to="/logged" />}
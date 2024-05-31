import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { AlertMessage } from "../components/AlertMessage"
//import { AuthContext } from "../contexts/AuthContext";
import { ToHomepageBtn } from "../components/ToHomepageBtn"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  //const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  //"handlelogin" function where we use login from the global state
  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3000/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (response.ok) {
        //Login the user and navigate to login page
        login(data.user, data.accessToken)
        navigate("/user-page")
      } else {
        if (response.status === 400) {
          setErrorMessage("Incorrect password, try again")
        } else {
          setErrorMessage("User does not exist")
        }
      }
    } catch (error) {
      console.error("Error logging in", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <ToHomepageBtn />
      <h2 className="title">User login </h2>
      <form className="form-container" onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="user-email"> Email adress: </label>
          <input
            type="text"
            id="user-email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-password">Password: </label>
          <input
            type="password"
            id="user-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button className="full-width" type="submit">
          Log in
        </button>
      </form>

      {loading ? (
        <div>
          <p className="user-loading"> Logging in...</p>
        </div>
      ) : (
        <>
          {errorMessage != null && (
            <AlertMessage type="error" message={errorMessage} />
          )}
        </>
      )}
    </div>
  )
}

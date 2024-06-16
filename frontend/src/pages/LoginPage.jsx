import styled from "styled-components"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AlertMessage } from "../components/AlertMessage"
import { AuthContext } from "../contexts/AuthContext"
import { StyledContainer } from "../components/styled/LoginPage.styled.jsx"
import { StyledButton } from "../components/styled/Button.styled.jsx"
import { Background } from "../components/styled/Background.styled.jsx"
import { LogoutButton } from "../components/LogoutButton"

export const LoginPage = ({ redirectOnLogin = true, onLoginSuccess }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const { authState } = useContext(AuthContext)
  const { login } = useContext(AuthContext)
  const { isAuthenticated } = authState
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(
        "https://museek-2ejb.onrender.com/sessions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      )
      const data = await response.json()
      if (response.ok) {
        //Login the user and navigate to login page
        login(data.user, data.accessToken)

        if (redirectOnLogin) {
          navigate("/user-page")
        } else if (onLoginSuccess) {
          onLoginSuccess()
        }
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
    <>
      <StyledContainer>
        <Background bgColor="#dee0e2" />
        {isAuthenticated ? (
          <InfoBox>
            You are already logged in.
            <ButtonContainer>
              {" "}
              <Link to="/user-page">
                <StyledButton>User page</StyledButton>{" "}
              </Link>
              <LogoutButton />
            </ButtonContainer>
          </InfoBox>
        ) : (
          <>
            <h2 className="title">Log in to your personal page</h2>
            <form className="form-container" onSubmit={handleLogin}>
              <div className="input-wrapper">
                <label htmlFor="user-email">Email address:</label>
                <input
                  type="text"
                  id="user-email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="user-password">Password:</label>
                <input
                  type="password"
                  id="user-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <StyledButton type="submit">Log in</StyledButton>
              <RedirectMessage>
                <p>
                  Don't have a profile yet? Register{" "}
                  <Link to="/register">here</Link>
                </p>
              </RedirectMessage>
            </form>

            {loading ? (
              <div>
                <p className="user-loading">Logging in...</p>
              </div>
            ) : (
              errorMessage != null && (
                <AlertMessage type="error" message={errorMessage} />
              )
            )}
          </>
        )}
      </StyledContainer>
    </>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

const RedirectMessage = styled.div`
  a {
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`

const InfoBox = styled.div`
  padding-top: 50px;
`

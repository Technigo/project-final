import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AlertMessage } from "../components/AlertMessage";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledContainer } from "../components/styled/LoginPage.styled";
import { AuthContext } from "../contexts/AuthContext";
import { LogoutButton } from "../components/LogoutButton";
import { Background } from "../components/styled/Background.styled";
import styled from "styled-components";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState({
    error: null,
    success: false,
  });
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const getErrorMessage = () => {
    if (registrationStatus.error === 409) {
      return "User already exists";
    } else {
      return "Something went wrong. Please verify your information.";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://museek-2ejb.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        clearForm();
        setRegistrationStatus({ error: null, success: true });
      } else {
        setRegistrationStatus({ error: response.status, success: false });
        console.error("Error creating user", data);
      }
    } catch (error) {
      setRegistrationStatus({ error: 400, success: false });
      console.error("Error creating user", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <Background bgColor="#dee0e2" />

      {isAuthenticated ? (
        <InfoBox>
          You are already logged in.
          <ButtonContainer>
            {" "}
            <Link to="/user-page">
              <StyledButton aria-label="Go to user page">User page</StyledButton>{" "}
            </Link>
            <LogoutButton />
          </ButtonContainer>
        </InfoBox>
      ) : (
        <>
          <h2 className="title">Register here!</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name">Name:</label>
              <input
                required={true}
                type="text"
                id="name"
                placeholder="Name McName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email adress:</label>
              <input
                required={true}
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password:</label>
              <input
                required={true}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <StyledButton aria-label="Register" type="submit">Register</StyledButton>
            <RedirectMessage>
              <p>
                Are you already part of the community? Log in{" "}
                <Link to="/login"> here</Link>
              </p>{" "}
            </RedirectMessage>
          </form>

          {loading ? (
            <div>
              <p className="user-loading"> User being created...</p>
            </div>
          ) : (
            <>
              {registrationStatus.success && (
                <AlertMessage type="success" message="User has been created" />
              )}
              {registrationStatus.error != null && (
                <AlertMessage type="error" message={getErrorMessage()} />
              )}
            </>
          )}

          {registrationStatus.success && (
            <Link aria-label="Go to login page" to={"/login"}>
              Go to login
              <IoIosArrowForward />
            </Link>
          )}
        </>
      )}
    </StyledContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const RedirectMessage = styled.div`
  a {
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const InfoBox = styled.div`
  padding-top: 50px;
`;

import StyledButton from "./styled/Button.styled";
// import StyledNewsletter from "./styled/Newsletter.styled";
import { AlertMessage } from "./AlertMessage";
import { useRef, useState } from "react";
import styled from "styled-components";

export const Newsletter = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const inputRef = useRef("");

  const signUp = (event) => {
    event.preventDefault();
    if (inputRef.current.value === "") {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    } else {
      setShowErrorMessage(false);
      setShowSuccessMessage(true);
      inputRef.current.value = "";
    }
  };

  return (
    <StyledNewsletter onSubmit={signUp}>
      <NewsletterDiv>
        <h2>Newsletter</h2>
        <p>
          Sign up & receive exclusive updates about collections, exhibitions,
          and events
        </p>
        <SignupContainer>
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your e-mail address here."
          />
          <StyledButton>Sign up</StyledButton>
        </SignupContainer>
        {showErrorMessage === true && (
          <AlertMessage
            type="text"
            message="That does not look like an email address..."
          />
        )}
        {showSuccessMessage === true && (
          <AlertMessage type="success" message="Thank you! Email registered" />
        )}
      </NewsletterDiv>
      <Logo>
        <img src="icon4-blue-slogan.png" />
      </Logo>
    </StyledNewsletter>
  );
};

const StyledNewsletter = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #dee0e2;
  width: 100%;
  padding: 35px 0;

  h2,
  p,
  input,
  button {
    margin-left: 5%;
  }

  h2 {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 10px;
  }

  input {
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
  }
`;

const SignupContainer = styled.div`
  display: flex;

  margin-top: 30px;
  align-items: center;

  input {
    width: 220px;
    margin-bottom: 0;
    border: 1px solid grey;
  }

  button {
    margin-left: 15px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    input {
      width: 80%;
    }
    button {
      width: 45%;
    }
  }
`;

const NewsletterDiv = styled.div``;

const Logo = styled.div`
  img {
    max-width: 250px;
  }
`;

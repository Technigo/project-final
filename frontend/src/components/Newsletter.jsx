import StyledButton from "./styled/Button.styled";
import StyledNewsletter from "./styled/Newsletter.styled";
import { AlertMessage } from "./AlertMessage";
import { useRef, useState } from "react";
import styled from "styled-components";

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
`;

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
      <h2>Newsletter</h2>
      <p>
        Sign up & receive exclusive updates about collections, exhibitions, and
        events
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
    </StyledNewsletter>
  );
};

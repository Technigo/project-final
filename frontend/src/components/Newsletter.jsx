import StyledButton from "./styled/Button.styled";
import StyledNewsletter from "./styled/Newsletter.styled";
import { AlertMessage } from "./AlertMessage";
import { useRef, useState } from "react";

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
    <>
      <StyledNewsletter onSubmit={signUp}>
        <h2>Newsletter</h2>
        <p>
          Sign up & receive exclusive updates about collections, exhibitions,
          and events
        </p>
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your e-mail address here."
        />
        <StyledButton>Sign up</StyledButton>
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
    </>
  );
};

import StyledButton from "./styled/Button.styled";
import StyledNewsletter from "./styled/Newsletter.styled";
import { AlertMessage } from "./AlertMessage";
import { useState } from "react";

export const Newsletter = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const signUp = () => {
    e.preventDefault();
    if (input === "") {
      setShowErrorMessage(true);
    } else {
      const signUpUser = input.toLowerCase();
    }
  };

  return (
    <>
      <StyledNewsletter>
        <h2>Newsletter</h2>
        <p>
          Sign up & receive exclusive updates about collections, exhibitions,
          and events
        </p>
        <input type="email" placeholder="Enter your e-mail address here." />
        <StyledButton type="submit">Sign up</StyledButton>
        {showErrorMessage === true && (
          <AlertMessage
            type="text"
            message="That does not look like an email address..."
          />
        )}
      </StyledNewsletter>
    </>
  );
};

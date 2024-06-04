import StyledButton from "./styled/Button.styled";
import StyledNewsletter from "./styled/Newsletter.styled";
import { AlertMessage } from "./AlertMessage";
import { useRef, useState } from "react";

export const Newsletter = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const inputRef = useRef("");

  const signUp = (event) => {
    event.preventDefault();
    if (inputRef.current.value === "") {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      const signUpUser = inputRef.current.value.toLowerCase();
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
      </StyledNewsletter>
    </>
  );
};

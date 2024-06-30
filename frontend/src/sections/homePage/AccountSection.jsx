import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./styling/AccountSection.css";

const AccountSection = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="accountContainer">
      <div className="accountWrapper">
        <h3 className="accountTitle">
          Begin Your Journey with Everything You Need
        </h3>
        <p className="accountIntroText">
          To view available rentals, please log in or create an account.
        </p>
        <div className="contentWrapper">
          <img
            src="/images/AccountImage.svg"
            className="accountImage"
            alt="Beach in Palma"
          />
          <div className="loginWrapper">
            <p className="accountText">Have an account already?</p>
            <Link to="/login">
              <button className="loginButton">Log in</button>
            </Link>
            <p className="accountText">Or you can create one here:</p>
            <Link to="/register">
              <button className="createAccountButton">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;

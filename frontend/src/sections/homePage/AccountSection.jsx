import { Link } from "react-router-dom";
import "../../styling/sectionsStyling/homePage/AccountSection.css";

const AccountSection = () => {
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
            src="/images/AccountImage.jpg"
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

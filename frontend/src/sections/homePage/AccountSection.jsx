import "../../styling/sectionsStyling/homePage/AccountSection.css";

const AccountSection = () => {
  return (
    <div className="accountContainer">
      <div className="accountWrapper">
        <h3 className="accountTitle">
          Begin Your Journey with Everything You Need
        </h3>
        <p className="accountIntroText">
          Embark on your memorable Palma adventure fully equipped for a perfect
          stay.
        </p>
        <div className="contentWrapper">
          <img
            src="/images/AccountImage.jpg"
            className="accountImage"
            alt="Beach in Palma"
          />
          <div className="loginContainer">
            <p className="accountText">Have an account already?</p>
            <button className="loginButton">Log in</button>
            <p className="accountText">Or you can create one here:</p>
            <button className="createAccountButton">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;

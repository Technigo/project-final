import "../../styling/sectionsStyling/authPages/AuthPages.css";

const LoginPage = () => {
  return (
    <div className="authContainer">
      <form className="authForm">
        <h2 className="authTitle">Sign in</h2>
        <label className="authLabel">
          Email:
          <input type="email" required className="emailInput" />
        </label>
        <label className="authLabel">
          Password:
          <input type="password" required className="passwordInput" />
        </label>
        <div className="authButtonWrapper">
          <button type="submit" className="authButton">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

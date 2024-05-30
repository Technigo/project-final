import "../../styling/sectionsStyling/authPages/AuthPages.css";

const RegisterPage = () => {
  return (
    <div className="authContainer">
      <form className="authForm">
        <h2 className="authTitle">Register</h2>
        <label className="authLabel">
          Name:
          <input type="text" required className="authInput" />
        </label>

        <label className="authLabel">
          Email:
          <input type="email" required className="authInput" />
        </label>

        <label className="authLabel">
          Password:
          <input type="password" required className="authInput" />
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

export default RegisterPage;

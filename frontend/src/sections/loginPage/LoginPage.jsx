const LoginPage = () => {
  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Sign in</h1>
      <form className="loginForm">
        <label className="loginLabel">
          Email:
          <input type="email" required className="emailInput" />
        </label>
        <label className="loginLabel">
          Password:
          <input type="password" required className="passwordInput" />
        </label>
        <button type="submit" className="loginFormButton">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

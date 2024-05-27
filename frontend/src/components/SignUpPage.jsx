export const SignUpPage = ({ type }) => {
  return (
    <div className="container mx-auto">
      <h1>Sign up as {type}</h1>
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

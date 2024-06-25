import { Link } from "react-router-dom";

export const SignupBtn = () => {
  return (
    <div>
      <Link
        to="/signup"
        className="bg-transparent text-white p-2 rounded-[23px] border-3 border-black font-avenir inline-block text-center"
        aria-label="Sign up for an account"
      >
        Signup
      </Link>
    </div>
  );
};

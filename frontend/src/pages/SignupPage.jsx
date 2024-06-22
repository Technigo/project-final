import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { BackHome } from "../components/buttons/BackHome";
import { ColorCheckbox } from "../components/CheckBox";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const newUser = { name, email, password };

    try {
      const res = await fetch("https://parkhive.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to register");
      }
      const data = await res.json();
      console.log("Register successful:", data);
      localStorage.setItem("Net-Token", data.token);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative flex flex-col justify-center items-center">
        <div className="absolute bg-signup-image bg-cover bg-center right-0 top-0 object-cover sm:h-[180px] md:h-[315px] lg:h-[564px] w-full flex items-center justify-center">
          <BackHome
            className={
              "text-fontColor flex flex-row gap-x-3 absolute left-[30px] top-[30px] transition-transform duration-300 hover:scale-110"
            }
          />
        </div>
        <div className="text-center sm:p-[50px] p-[80px]">
          <h2 className="sm:text-h2sm md:text-h2lg lg:text-h2lg">
            Ready for an adventure?
          </h2>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="border-2 rounded-[30px] flex flex-col gap-y-[30px] sm:w-[390px] md:w-[834px] lg:w-[834px] items-center sm:py-[40px]"
            aria-labelledby="signup-form"
          >
            <h2
              id="signup-form"
              className="sm:text-h2sm md:text-h2lg lg:text-h2lg"
            >
              Sign up
            </h2>
            {error && (
              <div role="alert" className="text-red-600">
                {error}
              </div>
            )}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
                aria-required="true"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
                aria-required="true"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
                aria-required="true"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirm-password"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Re-enter Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
                aria-required="true"
              />
            </div>
            <div className="flex flex-row items-center">
              <ColorCheckbox id="term" />
              <label
                htmlFor="term"
                className="text-fontColor sm:text-textsm md:textmd lg:text-textmd px-2"
              >
                I have read the terms of use
              </label>
            </div>
            <button
              type="submit"
              className="text-cardBg bg-bg2 rounded sm:text-h2sm lg:text-h2md py-[5px] px-[10px]"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="sm:p-3 sm:py-[50px] md:py-[60px]">
          <p className="text-fontColor sm:text-textsm md:text-textmd lg:text-textmd">
            Already have an account? Login{" "}
            <Link to="/login" className="text-bg2">
              here
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

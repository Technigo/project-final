import Menu from "../utilities/Menu";
import { useNavigate } from "react-router-dom";

export const FindOutMorePage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Menu />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Find Out More
        </h1>
        <p className="text-xl text-center mb-8">
          Learn more about joining the ADHD Community and how you can connect
          with others.
        </p>
        <div className="mb-8 text-left md:text-center">
          <div className="mb-8 md:inline-block md:text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Help Someone
            </h2>
            <p className="text-lg text-gray-800">
              As a listener, you provide support and understanding to those in
              need. You offer a compassionate ear and empathetic response to
              their challenges and experiences with ADHD.
            </p>
            {/*  <a
              href="/signup"
              className="inline-block bg-primary text-light px-6 py-3 rounded-full text-lg mb-4 md:mb-0 md:mr-4"
            >
              Help Someone
            </a> */}
          </div>
          <div className="md:inline-block md:text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Talk with Someone
            </h2>
            <p className="text-lg text-gray-800">
              As a seeker, you have the opportunity to express your thoughts and
              feelings about living with ADHD. You can share your experiences,
              seek advice, or simply connect with others who understand your
              journey.
            </p>
            <a
              onClick={handleSignup}
              className="inline-block bg-primary text-light px-6 py-3 rounded-full text-lg"
            >
              Choose your role
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

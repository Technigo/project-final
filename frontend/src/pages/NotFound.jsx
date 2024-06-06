import { Link } from "react-router-dom";
import notFoundImage from "../assets/not-found.jpg";

export const NotFound = () => {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <div className="mx-6 my-10">
          <img
            src={notFoundImage}
            alt="Page Not Found"
            className="mx-auto w-full max-w-md"
          />
          <div>
            <h1 className="mb-6 mt-10 font-poppins font-bold text-black">
              Oops!
            </h1>
            <h2 className="mb-6 font-poppins font-bold text-blue">
              404 - Page not found
            </h2>
            <p className="font-lato text-sm lg:text-lg">
              Sorry, but the page you are looking for doesn't exist, has been
              removed, or is temporarily unavailable. <br />
              But don’t worry, there’s plenty more to explore:
            </p>
            <ul className="m-4">
              <li className="list-disc font-lato text-sm lg:text-lg">
                Go to our{" "}
                <Link to="/" className="font-bold text-button-blue underline">
                  Homepage
                </Link>{" "}
                to start fresh
              </li>
              <li className="list-disc font-lato text-sm lg:text-lg">
                Use the search bar to find what you need
              </li>
            </ul>
            <p className="font-lato text-sm lg:text-lg">
              Thank you for your understanding!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

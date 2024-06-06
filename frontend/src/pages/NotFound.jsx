import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="mx-6 my-20">
        <h2>404</h2>
        <h3>Oops! That page can’t be found</h3>
        <p>
          Sorry, but the page you are looking for doesn't exist, has been
          removed, or is temporarily unavailable. <br />
          But don’t worry, there’s plenty more to explore:
        </p>
        <ul>
          <li>
            Go to our <Link to="/">Homepage</Link> to start fresh
          </li>
          <li>Use the search bar to find what you need</li>
        </ul>
        <p>Thank you for your understanding!</p>
      </div>
    </>
  );
};

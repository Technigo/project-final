import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="mx-6">
        <h1 className="mt-10 font-poppins font-bold text-light-blue">404</h1>
        <h2 className="my-3 font-poppins font-bold text-blue">
          Oops! That page can’t be found
        </h2>
        <p className="font-lato text-sm">
          Sorry, but the page you are looking for doesn't exist, has been
          removed, or is temporarily unavailable. <br />
          But don’t worry, there’s plenty more to explore:
        </p>
        <ul className="m-4">
          <li className="list-disc font-lato text-sm">
            Go to our <Link to="/" className="underline font-bold">Homepage</Link> to start fresh
          </li>
          <li className="list-disc font-lato text-sm">
            Use the search bar to find what you need
          </li>
        </ul>
        <p className="font-lato text-sm">Thank you for your understanding!</p>
      </div>
    </>
  );
};

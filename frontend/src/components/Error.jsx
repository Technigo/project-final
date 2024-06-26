import Lottie from "lottie-react";
import PropTypes from "prop-types";

import errorAnimation from "../assets/animation/lottie-error.json";

export const Error = ({ error }) => {
  return (
    <div className="my-5 flex w-full flex-col items-center justify-center gap-4 px-5 text-center">
      <Lottie animationData={errorAnimation} loop={true} />
      <p className="text-base">{error}</p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

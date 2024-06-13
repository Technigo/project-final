import Lottie from "lottie-react";
import PropTypes from "prop-types";

import errorAnimation from "../assets/animation/lottie-error.json";

export const Error = ({ error }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Lottie
        animationData={errorAnimation}
        loop={true}
        style={{ width: 150, height: 150 }}
      />
      <p className="text-base">{error}</p>
    </div>
  );
};

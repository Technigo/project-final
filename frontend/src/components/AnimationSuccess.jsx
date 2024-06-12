import PropTypes from "prop-types";
import Lottie from "lottie-react";
import successAnimation from "../assets/animation/lottie-success.json";

export const AnimationSuccess = ({ isVisible }) => {
  return (
    <div
      className={`flex items-center justify-center ${isVisible ? "" : "hidden"} h-[280px] w-[280px]`}
    >
      <Lottie animationData={successAnimation} loop={true} />
    </div>
  );
};

AnimationSuccess.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

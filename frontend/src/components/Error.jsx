import PropTypes from "prop-types";
import Lottie from "lottie-react";
import error from "../assets/animation/lottie-err.json";

export const Error = ({ isVisible }) => {
  return (
    <div className={`flex justify-center ${isVisible ? "" : "hidden"}`}>
      <Lottie
        animationData={error}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

Error.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

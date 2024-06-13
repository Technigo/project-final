import PropTypes from "prop-types";
import Lottie from "lottie-react";
import loading from "../assets/animation/lottie-loading.json";

export const Loading = ({ isVisible }) => {
  return (
    <div className={`flex justify-center ${isVisible ? "" : "hidden"}`}>
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

Loading.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

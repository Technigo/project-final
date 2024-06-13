import Lottie from "lottie-react";
import error from "../assets/animation/lottie-error.json";

export const Error = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        animationData={error}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

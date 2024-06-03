import Lottie from "lottie-react";
import starsFalling from "../assets/glimmer-animation-white.json";

export const Loading = () => {
  return (
    <div className="laptop:w-1/2 m-auto">
      <Lottie animationData={starsFalling} loop={true} />
    </div>
  );
};

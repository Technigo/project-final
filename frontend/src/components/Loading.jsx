import Lottie from "lottie-react";
import loading from "../assets/animation/lottie-loading.json";

export const Loading = () => {
  return (
    <div>
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

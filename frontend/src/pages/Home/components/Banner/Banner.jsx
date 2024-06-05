import { Image } from "../../../../common/ReusableComponents/Image";
import "./Banner.css";
import banner from "/assets/images/banner.png";

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Image
        src={banner}
        alt="image saying we believe in the power of play"
        className="banner"
      />
    </div>
  );
};

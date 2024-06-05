import { Image } from "../../../../common/ReusableComponents/Image/Image";
import "./Banner.css";
import banner from "/assets/images/banner.png";

export const Banner = () => {
  return (
    <section className="banner-container">
      <Image
        src={banner}
        alt="image saying we believe in the power of play"
        className="banner"
      />
    </section>
  );
};

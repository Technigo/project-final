import { Image } from "../../../../common/ReusableComponents/Image/Image";
import "./Banner.css";
// import banner from "/assets/images/banner.png";
import stonesAndCones from "/assets/images/stones-and-cones.svg"
import skewedStamp from "/assets/logotypes/logo-stamp-skewed.svg"

export const Banner = () => {
  return (
    <section className="banner-container">
      {/* <Image
        src={banner}
        alt="image saying we believe in the power of play"
        className="banner"
      /> */}
      <h1>We belive in the power of play.</h1>
      <Image src={stonesAndCones}/>
      <Image src={skewedStamp}/>
    </section>
  );
};

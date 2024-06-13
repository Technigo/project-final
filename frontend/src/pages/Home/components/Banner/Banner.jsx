import { Image } from "../../../../common/ReusableComponents/Image/Image";
import "./Banner.css";
import stonesAndCones from "/assets/images/stones-and-cones.svg";
import skewedStamp from "/assets/logotypes/logo-stamp-skewed.svg";

export const Banner = () => {
  return (
    <section className="banner-container">
      <div className="bubble-row-top"></div>
      <div className="banner-content">
        <Image
          src={stonesAndCones}
          alt="Cones and stones"
          className="cones-and-stones"
        />
        <h1>
          We belive <br className="first-br"></br>in the{" "}
          <br className="second-br"></br>power <br className="third-br"></br>of
          play.
        </h1>
        <Image src={skewedStamp} alt="Stamp" className="stamp" />
      </div>
      <div className="bubble-row-bottom"></div>
    </section>
  );
};

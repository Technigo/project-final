import "./Hero.css";
import heroImage from "/assets/images/hero-image.jpg";
import { Image } from "../../../../common/ReusableComponents/Image";
import { Button } from "../../../../common/ReusableComponents/Button";

export const Hero = () => {
  return (
    <div className="hero">
      <Image
        src={heroImage}
        alt="Hero-image of small girl dancing in the field"
        className="hero"
      />
      <h1 className="hero-h1">Summer vibes</h1>
      <div className="hero-text">
        <h4 className="hero-h4">Playful clothes for sunny days</h4>
        <Button label="See all products" className="hero" to="/products" />
      </div>
    </div>
  );
};

import "./Hero.css";
import heroImage from "/assets/images/hero-image.jpg";
import { Image } from "../../../../common/ReusableComponents/Image/Image";
import { Button } from "../../../../common/ReusableComponents/Button/Button";

export const Hero = () => {
  return (
    <section className="hero-container">
      <Image
        src={heroImage}
        alt="Hero-image of small girl dancing in the field"
        className="hero"
      />
      <div className="hero-text">
        <h1 className="hero-h1">Summer vibes</h1>
        <h2>Playful clothes for sunny days</h2>
        <Button variant="shop" label="See all products" to="/products" />
      </div>
    </section>
  );
};

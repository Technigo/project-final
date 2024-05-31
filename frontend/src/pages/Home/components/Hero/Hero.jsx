import "./Hero.css";
import heroImage from "/assets/images/hero-image.jpg";
import { Image } from "../../../../common/ReusableComponents/Image";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <Image
        src={heroImage}
        alt="Hero-image of small girl dancing in the field"
        className="hero"
      />
      <div className="hero-text">
        <h1>Summer vibes</h1>
        <p>Playful clothes for sunny days</p>
        <Link to="/products">
          <button>See all products</button>
        </Link>
      </div>
    </div>
  );
};

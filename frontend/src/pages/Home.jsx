
import { Carousel } from "../components/Carousel";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

import { ReviewCard } from "../components/ReviewCard";
import { Statements } from "../components/Statements";

export const Home = ({ data }) => {
  return (
    <div className="flex flex-col bg-main-red">
      <Hero data={data["hero"]} />
      <Carousel />
      <Statements data={data["atGlim"]} />

      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer data={data["footer"]} aboveColor={"yellow"} />
    </div>
  );
};

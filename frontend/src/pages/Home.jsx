
import { Carousel } from "../components/Carousel";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

import { ReviewCard } from "../components/ReviewCard";

export const Home = ({ data }) => {
  return (

    <div className="flex flex-col bg-main-red">
      <Hero data={data["hero"]} />
      <Carousel />

      <ReviewCard />
    </div>
  );
};

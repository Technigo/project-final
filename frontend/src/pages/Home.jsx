import { Carousel } from "../components/Carousel";
import { ProductCard } from "../components/ProductCard";
import { ReviewCard } from "../components/ReviewCard";

export const Home = () => {
  return (
    <div>
      Home
      <Carousel />
      <ProductCard />
      <ReviewCard />
    </div>
  );
};

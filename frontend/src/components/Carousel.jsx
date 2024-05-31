import { ProductCard } from "./ProductCard";

export const Carousel = () => {
  return (
    <div>
      Carousel
      <div className="whitespace-nowrap px-[50%] scroll-p-4 snap-x snap-mandatory overflow-auto p-2 flex gap-2">
        <div className="snap-center">
          <ProductCard />
        </div>
        <div className="snap-center">
          <ProductCard />
        </div>
        <div className="snap-center">
          <ProductCard />
        </div>
        <div className="snap-center">
          <ProductCard />
        </div>
        <div className="snap-center">
          <ProductCard />
        </div>
        <div className="snap-center">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

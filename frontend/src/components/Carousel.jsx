import { useEffect, useRef } from "react";
import { ProductCard } from "./ProductCard";

export const Carousel = () => {
  const sliderRef = useRef(null);
  let mouseDown = false;
  let startX, scrollLeft;

  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = (e) => {
    mouseDown = false;
  };

  const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
  };

  // Add the event listeners
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      const slider = sliderRef.current;
      slider.addEventListener("mousemove", move, false);
      slider.addEventListener("mousedown", startDragging, false);
      slider.addEventListener("mouseup", stopDragging, false);
      slider.addEventListener("mouseleave", stopDragging, false);

      return () => {
        slider.addEventListener("mousemove", move, false);
        slider.addEventListener("mousedown", startDragging, false);
        slider.addEventListener("mouseup", stopDragging, false);
        slider.addEventListener("mouseleave", stopDragging, false);
      };
    }
  }, []);

  return (
    <div>
      <div
        ref={sliderRef}
        className=" flex whitespace-nowrap snap-x snap-mandatory overflow-x-auto overflow-hidden mx-auto px-[50%]  gap-2 scroll-smooth"
      >
        <div className="flex-shrink-0 snap-center w-52">
          <ProductCard />
        </div>
        <div className="flex-shrink-0 snap-center w-52">
          <ProductCard />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard />
        </div>
        <div className="flex-shrink-0 snap-center w-52">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

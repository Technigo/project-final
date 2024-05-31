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
    const slider = sliderRef.current;
    if (slider) {
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
        className=" whitespace-nowrap scroll-auto px-[50%] scroll-p-4 snap-x snap-mandatory overflow-auto p-2 flex gap-2"
      >
        <div className="child snap-center ">
          <ProductCard />
        </div>
        <div className="child snap-center">
          <ProductCard />
        </div>
        <div className="child snap-center">
          <ProductCard />
        </div>
        <div className="child snap-center">
          <ProductCard />
        </div>
        <div className="child snap-center">
          <ProductCard />
        </div>
        <div className="child snap-center">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

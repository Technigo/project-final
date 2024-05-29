import { useState, useEffect } from "react";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const museumImages = ["museum1.jpeg", "museum2.jpg", "museum3.jpg"];

  const autoScroll = true;
  let intervalTime = 6000;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === museumImages.length - 1 ? 0 : currentSlide + 1
    );
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <img src={museumImages[currentSlide]} />
    </>
  );
};

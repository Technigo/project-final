import React, { useRef, useState, useEffect } from "react";

export const Slideshow = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > items.length) newIndex = 1;
      if (newIndex < 1) newIndex = items.length;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = slideRefs.current;
    const dots = dotRefs.current;
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  };

  return (
    <div className="m-auto flex flex-col text-text-light content-center tablet:max-w-[850px] laptop:hidden">
      <div className="relative">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="mySlides fade w-3/4 m-auto leading-loose"
            style={{ display: index + 1 === slideIndex ? "block" : "none" }}
          >
            <h2 className="numbertext font-heading my-4 text-xl text-center tablet:text-2xl">
              {item.perk}
            </h2>
            <p className="text font-body text-center">{item.comment}</p>
          </div>
        ))}
        <div className="">
          <a
            className="prev absolute top-0 cursor-pointer p-4 left-0 hover:opacity-75"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </a>
          <a
            className="next absolute top-0 cursor-pointer p-4 right-0 hover:opacity-75"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </a>
        </div>
      </div>

      <div className="text-center">
        {items.map((_, index) => (
          <span
            key={index}
            ref={(el) => (dotRefs.current[index] = el)}
            className={`dot w-10 my-10 rounded-full bg-grey-200 cursor-pointer hover:opacity-75 inline-block ${
              index + 1 === slideIndex ? "active text-main-yellow" : ""
            }`}
            onClick={() => currentSlide(index + 1)}
          >
            ⬤
          </span>
        ))}
      </div>
    </div>
  );
};

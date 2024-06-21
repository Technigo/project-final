import { Carousel } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const ImgCarousel = () => {
  const customTheme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="!absolute left-2 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-blue/10 active:bg-light-blue/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:left-4"
              aria-label="Go left"
            >
              <svg
                fill="#ADBBDA"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ADBBDA"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path>
                </g>
              </svg>
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute right-2 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-blue/10 active:bg-light-blue/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:right-4"
            aria-label="Go right"
          >
            <svg
              fill="#ADBBDA"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ADBBDA"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
              </g>
            </svg>
          </button>
        ),
        navigation: ({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-2 left-2/4 z-50 hidden -translate-x-2/4 gap-2 lg:flex">
            {new Array(length).fill("").map((_, i) => (
              <button
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl text-lg transition-all content-[''] lg:h-2 ${
                  activeIndex === i
                    ? "w-8 bg-light-blue lg:w-10"
                    : "w-6 bg-white lg:w-8"
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Move to slide ${i + 1}`}
              />
            ))}
          </div>
        ),
        autoplay: true,
        autoplayDelay: 5000,
        transition: {
          type: "tween",
          duration: 0.5,
        },
        loop: true,
      },
    },
  };

  const carouselImgs = [
    {
      _id: "665dbd9941d34485c8a0e4d5",
      templateName: "Fitness Fanatic",
      src: "https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588956/mockups/mv7tzdlx7gjj6ccdvjsx.webp",
    },
    {
      _id: "665dbd9941d34485c8a0e4d6",
      templateName: "Blue",
      src: "https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588974/mockups/tlsk4tsiin3uesyr094k.webp",
    },
    {
      _id: "665dbd9941d34485c8a0e4cf",
      templateName: "Health and Wellness",
      src: "https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588806/mockups/ta9gbwyxaaqeekzcroya.webp",
    },
    {
      _id: "665dbd9941d34485c8a0e4d3",
      templateName: "Tech Hub",
      src: "https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588911/mockups/qqxyy2cftoghdle6n00r.webp",
    },
    {
      _id: "665dbd9941d34485c8a0e4d4",
      templateName: "Pet Paradise",
      src: "https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588929/mockups/pzszcjtpoyjfpxub9v9n.webp",
    },
  ];
  return (
    <ThemeProvider value={customTheme}>
      <Carousel className="lg:rounded-xl">
        {carouselImgs.map((product) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <img
              src={product.src}
              alt={product.templateName}
              className="h-full w-full object-cover"
            />
          </Link>
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

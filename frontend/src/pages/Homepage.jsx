import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

import arrowUp from "../assets/arrow-up-icon.svg";
import checkMark from "../assets/check-icon.svg";
import ctaImg from "../assets/ctaImg.jpg";
import pen from "../assets/pen-icon.svg";
import { Button } from "../components/Button";
import { Testimonial } from "../components/Testimonial";
import { CategoryCard } from "../components/CategoryCard";

export const Homepage = () => {
  // Getting product data for carosel
  const { getAllProducts } = useProductStore((state) => ({
    getAllProducts: state.getAllProducts,
  }));

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const customTheme = {
    carousel: {
      defaultProps: {
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
    <main>
      <>
        <section className="flex h-[500px] flex-col items-center justify-center gap-7 bg-[url('/src/assets/heroBg.jpg')] bg-cover bg-right-top bg-no-repeat">
          <h1 className="w-3/4 px-2 text-center font-bold">
            Design Your Website with Ease
          </h1>
          <p className="w-3/4 text-center font-lato">
            Discover the perfect web template for you! No coding skills
            needed—just pick, customize, and launch. <br />
            Let&apos;s make website creation easy and fun!
          </p>
          <Button text="SHOP NOW" navTo="/products" />
        </section>
        <section className="my-20 flex flex-col items-center justify-normal space-y-3 text-center">
          <h2 className="font-poppins font-bold">Best sellers</h2>
          <p className="mx-6 font-lato">
            Explore our most popular products! Tried, tested, and loved by many.
          </p>
          <div className="w-3/4 pt-4">
            <ThemeProvider value={customTheme}>
              <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <button
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-blue" : "w-4 bg-white"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Move to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              >
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
          </div>
        </section>
        <section className="lg:gap-auto mx-auto my-20 flex flex-col items-center justify-center gap-6 bg-blue py-20 lg:flex-row lg:gap-4">
          <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
            <span className="mb-3 flex flex-row items-center gap-4">
              <img className="w-8" src={pen} alt="pen icon" />
              <p className="text-lg font-bold lg:text-2xl">
                Shape It Your Style
              </p>
            </span>
            <p className="font-lato">
              From concept to creation, our user-friendly editor lets you design
              effortlessly. Drag, drop, and done!
            </p>
          </div>
          <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
            <span className="mb-3 flex flex-row items-center gap-4">
              <img className="w-8" src={checkMark} alt="pen icon" />
              <p className="text-lg font-bold lg:text-2xl">Expand fast</p>
            </span>
            <p className="font-lato">
              Accelerate your growth with scalable, high-performance templates.
              Grow your business quickly and effortlessly.
            </p>
          </div>
          <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
            <span className="mb-3 flex flex-row items-center gap-4">
              <img className="w-8" src={arrowUp} alt="pen icon" />
              <p className="text-lg font-bold lg:text-2xl">SEO Supercharged</p>
            </span>
            <p className="font-lato">
              Boost your visibility with SEO-optimized templates. Climb search
              rankings and attract more organic traffic.
            </p>
          </div>
        </section>
        <section className="my-20 flex flex-col items-center justify-center">
          <div className="flex w-2/3 flex-col items-center justify-center gap-6 pb-8 text-center">
            <h2 className="font-poppins font-bold">
              Build Your Dream Website Today!
            </h2>
            <p className="font-lato">
              Transform your vision into reality with our templates. Designed
              for success, these templates offer sleek designs and seamless
              functionality. Start creating a standout website effortlessly!
            </p>
            <Button text="SIGN UP" navTo="/signup" />
          </div>
          <div className="h-80 w-80 lg:h-96 lg:w-96">
            <img
              className="h-full w-full object-cover object-center"
              src={ctaImg}
              alt="image of tablet in a working environment"
            />
          </div>
        </section>
        <section className="my-20 flex flex-col items-center justify-center gap-6 px-6">
          <h2 className="font-poppins font-bold">By Categories</h2>
          <p className="font-lato">
            Explore our most popular products! Tried, tested, and loved by many.
          </p>
          <div className="mt-8 grid w-full grid-cols-1 gap-8 lg:w-fit lg:grid-cols-[repeat(4,_minmax(0,_320px))] lg:gap-8">
            <CategoryCard />
          </div>
        </section>
        <section className="mt-20 flex flex-col items-center gap-9 bg-light-blue py-14">
          <h2 className="mx-6 font-poppins font-bold">
            What Our Customers Say
          </h2>
          <div className="mx-6 rounded-sm md:max-w-screen-sm lg:max-w-none">
            <Testimonial />
          </div>
        </section>
        <section className="flex h-[400px] flex-col items-center justify-center space-y-9 bg-[url('/src/assets/homepage-cta-bg.jpg')] bg-cover bg-bottom px-6 text-center text-white lg:h-[670px]">
          <p className="mb-5 font-montserrat font-bold">
            Explore our collection of customizable templates
          </p>
          <h2 className="pb-4 font-poppins font-bold">
            Create Beautiful Websites Effortlessly
          </h2>
          <Button text="LOG IN" navTo="login" />
        </section>
      </>
    </main>
  );
};

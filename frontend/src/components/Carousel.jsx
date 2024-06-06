import { useEffect, useState, useRef, useCallback } from "react";
import { useProductsStore } from "../store/useProductsStore";
import { ProductCard } from "./ProductCard";
import { Loading } from "../components/Loading";

export const Carousel = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const displayedItemNumber = 3;

  const [slideIndex, setSlideIndex] = useState(1);
  const slideRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (productsData.products) {
      const shuffled = productsData.products.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, displayedItemNumber);
      setSelectedProducts(selected);
    }
  }, [productsData]);

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
      slides[i].style.opacity = "0.5";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.opacity = "1";
      dots[slideIndex - 1].className += " active";
    }
  };

  return (
    <div>
      {loadingProduct ? (
        <Loading />
      ) : (
        <>
          <h2 className="font-heading text-xl text-center text-white font-light">
            Products
          </h2>
          <ul className="flex snap-x snap-mandatory mx-auto gap-4 p-6 ">
            {selectedProducts.map((item, index) => (
              <li
                className="snap-center w-1/3"
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                style={{ opacity: index + 1 === slideIndex ? "100" : "50" }}
              >
                <ProductCard data={item} />
              </li>
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
          </ul>
          <div className="text-center">
            {selectedProducts.map((_, index) => (
              <span
                key={index}
                ref={(el) => (dotRefs.current[index] = el)}
                className={`dot w-10 my-10 rounded-full cursor-pointer hover:opacity-75 inline-block ${
                  index + 1 === slideIndex ? "active text-main-yellow" : ""
                }`}
                onClick={() => currentSlide(index + 1)}
              >
                ⬤
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/*
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
            className="mySlides fade w-1/2 m-auto leading-loose"
            style={{ display: index + 1 === slideIndex ? "block" : "none" }}
          >
            <h2 className="numbertext font-heading my-4 text-2xl text-center">
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
*/

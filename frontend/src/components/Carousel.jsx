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
      slides[i].style.display = "none";
      slides[slideIndex - 1].style.transition = "400ms";
            slides[slideIndex - 1].style.width = "0px";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].style.width = "33%";
      slides[slideIndex - 1].style.transition = "400ms";
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
          <ul className="flex snap-x snap-mandatory whitespace-nowrap scroll-m-[50] mx-auto gap-4 p-6 overflow-hidden">
            {selectedProducts.map((item, index) => (
              <li
                className="snap-center min-w-[200px]"
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
                  index + 1 === slideIndex
                    ? "active text-main-yellow"
                    : "text-main-white"
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

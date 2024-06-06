import { useEffect, useRef } from "react";
import { useProductsStore } from "../store/useProductsStore";
import { ProductCard } from "./ProductCard";
import { Loading } from "../components/Loading";

export const Carousel = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productsData);
  console.log("loading: ", loadingProduct);

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
      {loadingProduct ? (
        <Loading />
      ) : (
          <>
          <h2 className="font-heading text-xl text-center text-white font-light">Products</h2>
          <ul
            ref={sliderRef}
            className="flex no-scrollbar whitespace-nowrap snap-x snap-mandatory overflow-x-auto overflow-hidden mx-auto px-[50%] p-6 gap-2 scroll-smooth"
            >
            {productsData.products &&
              productsData.products.map((item, index) => (
                <li className="snap-center" key={index}>
                  <ProductCard data={item} />
                </li>
              ))}
          </ul>
              </>
      )}

      {/* <div className="flex-shrink-0 snap-center w-52">
          <ProductCard data={productsData} />
        </div>
        <div className="flex-shrink-0 snap-center w-52">
          <ProductCard data={productsData} />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard data={productsData} />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard data={productsData} />
        </div>
        <div className="flex-shrink-0 snap-center w-52 ">
          <ProductCard data={productsData} />
        </div>
        <div className="flex-shrink-0 snap-center w-52">
          <ProductCard data={productsData} />
        </div> */}
    </div>
  );
};

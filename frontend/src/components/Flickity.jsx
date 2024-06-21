import { useEffect, useState } from "react";
import Flickity from "react-flickity-component";

import { useProductsStore } from "../store/useProductsStore";
import { ProductCard } from "./ProductCard";

import "flickity/css/flickity.css";

export const FlickCarousel = (product) => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const displayedItemNumber = 7;

  useEffect(() => {
    if (productsData.products) {
      const shuffled = productsData.products.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, displayedItemNumber);
      setSelectedProducts(selected);
    }
  }, [productsData]);

  const flickityOptions = {
    wrapAround: false, //true will wraparound from start
    autoPlay: 3000, //set milliseconds
    selectedAttraction: 0.01,
    friction: 0.15,
    initialIndex: 3,
  };

  return (
    <div className="overflow:hidden">
      <Flickity options={flickityOptions}>
        {selectedProducts.map((item, index) => (
          <div className="snap-center m-2 w-40 min-w-[200px] tablet:min-w-[400px]" key={index}>
            <ProductCard data={item} />
          </div>
        ))}
      </Flickity>
    </div>
  );
};

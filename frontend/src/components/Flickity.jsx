import Flickity from "react-flickity-component";
import { useEffect, useState, useRef, useCallback } from "react";
import { useProductsStore } from "../store/useProductsStore";
import { ProductCard } from "./ProductCard";
import { Loading } from "../components/Loading";
import "flickity/css/flickity.css";

export const FlickCarousel = (product) => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const displayedItemNumber = 6;

  useEffect(() => {
    if (productsData.products) {
      const shuffled = productsData.products.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, displayedItemNumber);
      setSelectedProducts(selected);
    }
  }, [productsData]);

  const flickityOptions = {
    wrapAround: false,
  };

  return (
    <div className="overflow:hidden">
      <Flickity options={flickityOptions}>
        {selectedProducts.map((item, index) => (
          <div className="snap-center m-2 w-40 min-w-[200px]" key={index}>
            <ProductCard data={item} />
          </div>
        ))}
      </Flickity>
    </div>
  );
};

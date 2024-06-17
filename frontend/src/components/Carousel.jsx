import { useEffect, useState, useRef, useCallback } from "react";
import { useProductsStore } from "../store/useProductsStore";
import { ProductCard } from "./ProductCard";
import { Loading } from "../components/Loading";
import { FlickCarousel } from "./Flickity";

export const Carousel = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const displayedItemNumber = 3;

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


  return (
    <div className="w-full m-auto my-8">
      {loadingProduct ? (
        <Loading />
      ) : (
        <>

          <h2 className="font-heading text-xl text-center text-white font-light">
           Featured Products

          </h2>

          <FlickCarousel />
  
        </>
      )}
    </div>
  );
};

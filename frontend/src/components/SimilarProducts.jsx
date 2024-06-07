import { ProductCard } from "./ProductCard";
import { useProductsStore } from "../store/useProductsStore";
import { useState, useEffect } from "react"

const SimilarProducts = ({ category, currentProductId }) => {
    const { productsData } = useProductsStore();
    const [similarProducts, setSimilarProducts] = useState([]);
  
    useEffect(() => {
      if (productsData.products) {
        const filteredProducts = productsData.products.filter(
          (product) => product.category === category && product.id !== currentProductId
        );
        setSimilarProducts(filteredProducts);
      }
    }, [category, currentProductId, productsData.products]);
  

  return (
    <div className="bg-text-light">
      <ul className="w-11/12 m-auto grid grid-cols-2 gap-6 tablet:grid-cols-4 tablet:w-9/12 laptop:grid-cols-5 desktop:grid-cols-6">
        {similarProducts.length > 0 ? (
          similarProducts.map((item, index) => (
            <li key={index} className="w-full">
              <ProductCard data={item} />
            </li>
          ))
        ) : (
          <p>No similar products found</p>
        )}
      </ul>
    </div>
  );
};

export default SimilarProducts;

import { useEffect, useState } from "react";
import "./AllProducts.css";
import { ProductCard } from "./ProductCard";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";
import { Loader } from "../../common/ReusableComponents/Loader/Loader";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://cones-and-stones-ppnudpghiq-lz.a.run.app/products`
      );

      const data = await response.json();
      if (data.success) {
        // Simulate a delay by wrapping the state update in a setTimeout
        setTimeout(() => {
          setProducts(data.response);
          setIsLoading(false);
        }, 500);
      } else {
        setError(data.error.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="allproducts-page">
      {isLoading && <Loader />}

      {error && <NotFoundPage />}

      {!isLoading && !error && (
        <section className="products-container">
          <CategoryIcons variant="grey" />
          <h4>All products</h4>
          <div className="product-list">
            {Array.isArray(products) &&
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image_url={product.image_url}
                  name={product.name}
                  price={product.price}
                />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};

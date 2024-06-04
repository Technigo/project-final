import { useEffect, useState } from "react";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";
import "./AllProducts.css";
import { ProductCard } from "./ProductCard";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://cones-and-stones-ppnudpghiq-lz.a.run.app/products`
      );

      const data = await response.json();
      if (data.success) {
        setProducts(data.response);
        setError(null);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      } else {
        setError(data.error.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="allproducts-page">
      <CategoryIcons />
      <h2>All products</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
    </div>
  );
};

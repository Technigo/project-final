import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../AllProducts/ProductCard";
import "./Category.css";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";

export const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Ensure loading state is reset when category changes
      try {
        const response = await fetch(
          `https://cones-and-stones-ppnudpghiq-lz.a.run.app/products/category/${category}`
        );

        const data = await response.json();
        if (data.success) {
          setProducts(data.response);
          setError(null);
        } else {
          setError(data.error.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);
  return (
    <div className="category-page">
      <CategoryIcons />
      <h2>{category.toUpperCase()}</h2>
      {isLoading && <p>Loading... </p>}
      {error && <p>Error: {error}</p>}
      <div className="products">
        {products.map((product) => (
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

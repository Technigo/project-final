import { useEffect, useState } from "react";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";
import { Header } from "../../common/Header/Header";
import "./AllProducts.css";
import { ProductCard } from "./ProductCard";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setIsLoading(true); // Set loading to true before fetch starts

    fetch("https://cones-and-stones-ppnudpghiq-lz.a.run.app/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load products");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setProducts(data);
        setError(null); // Clear error if fetch is successful

        // Introduce a delay before setting loading to false
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log the error
        setError(error.message); // Set error message in state
        setIsLoading(false); // Set loading to false after fetch completes
      });
  };

  return (
    <div className="allproducts-page">
      <CategoryIcons />
      <h2>All products</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ProductCard />
    </div>
  );
};

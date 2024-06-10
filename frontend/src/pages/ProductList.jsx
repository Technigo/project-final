import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumb } from "../components/Breadcrumb";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching product", error);
        setError(error.toString()); 
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!products.length) {
    return <div>No products found.</div>; 
  }

  return (
    <>
      <Breadcrumb />
      <div className="lg:mx-[minmax(20px, auto)] lg:grid-cols-[repeat(3, minmax(0, 500px))] mx-10 grid grid-cols-1 justify-center justify-items-center gap-10 lg:gap-x-[5%]">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            templateImg={product.image}
            tags={product.tags}
            name={product.templateName}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
};

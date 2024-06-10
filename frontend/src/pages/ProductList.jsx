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
          throw new Error("There is a netwerk error");
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
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="my-10 font-poppins font-bold lg:my-20">
            Shop our templates
          </h1>
        </div>
      </div>
      <div>
        
      </div>

      <div className="flex w-auto flex-col items-center px-8">
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-full lg:max-w-screen-md lg:grid-cols-3">
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
      </div>
    </>
  );
};

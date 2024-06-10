import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductDetailsCard } from "../components/ProductDetailsCard";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { Id } = useParams();
  console.log("Id:", Id);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/${Id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product", error));
  }, [Id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumb lastBreadcrumbOverride={product.templateName.toUpperCase()} />
      <div className="mx-6 mb-20 mt-10 lg:my-20">
        <ProductDetailsCard
          image={product.image}
          tags={product.tags}
          templateName={product.templateName}
          price={product.price}
          numOfLikes={product.numOfLikes}
          category={product.category}
          description={product.description}
        />
      </div>
    </>
  );
};

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductDetailsCard } from "../components/ProductDetailsCard";
import { useProductStore } from "../stores/useProductStore";

export const ProductDetail = () => {
  const { getSingleProduct, loading, error, product } = useProductStore();
  const { Id } = useParams();
  console.log("Id:", Id);

  useEffect(() => {
    getSingleProduct(Id);
  }, [Id, getSingleProduct]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No products found.</div>;
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

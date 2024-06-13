import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";
import { ProductDetailsCard } from "../components/ProductDetailsCard";
import { useProductStore } from "../stores/useProductStore";
import { Error } from "../components/Error";

export const ProductDetail = () => {
  const { getSingleProduct, loading, error, product } = useProductStore();
  const { Id } = useParams();
  console.log("Id:", Id);

  useEffect(() => {
    getSingleProduct(Id);
  }, [Id, getSingleProduct]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumb
        lastBreadcrumbOverride={product && product.templateName.toUpperCase()}
      />
      <div className="mx-6 mb-20 mt-10 lg:my-20">
        {error && <Error error={error} />}
        {product && (
          <ProductDetailsCard
            id={product._id}
            image={product.image}
            tags={product.tags}
            templateName={product.templateName}
            price={product.price}
            numOfLikes={product.likes}
            category={product.category}
            description={product.description}
          />
        )}
      </div>
    </>
  );
};

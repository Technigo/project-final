import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumb } from "../components/Breadcrumb";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { ProductDetailsCard } from "../components/ProductDetailsCard";
import { useProductStore } from "../stores/useProductStore";

export const ProductDetail = () => {
  const { getSingleProduct, loading, error, product } = useProductStore();
  const { Id } = useParams();

  useEffect(() => {
    getSingleProduct(Id);
  }, [Id, getSingleProduct]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Breadcrumb
        lastBreadcrumbOverride={product && product.templateName.toUpperCase()}
      />
      <div className="mx-6 mb-20 mt-10 place-content-center lg:my-20">
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
    </main>
  );
};

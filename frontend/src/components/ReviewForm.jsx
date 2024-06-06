//User needs to be logged in to able to access the review form.

export const ReviewForm = () => {
  return <div>ReviewForm</div>;
};



import { useProductsStore } from "../store/useProductsStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct, loadingProduct, singleProduct } =
    useProductsStore();
  const product = singleProduct.product;

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  if (!product || !product.image || !product.image.url) {
    return (
      <div>
        <NotFound reason="product to review" />
      </div>
    );
  }

  return (
    <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
      {loadingProduct ? (
        <Loading />
      ) : (
        <div className="w-full">
          <img
            src={product.image.url}
            alt={product.description}
            className="w-full object-cover object-center aspect-square"
          />
          <div className="w-9/12 m-auto py-6 text-text-light font-heading">
            <h2>{product.brand}</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>starsection</p>
  
          </div>
        </div>
      )}
    </section>
  );
};

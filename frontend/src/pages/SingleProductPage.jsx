import { useProductsStore } from "../store/useProductsStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { NotFound } from "./NotFound";
import { Footer } from "../components/Footer";

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
        <NotFound reason="product" />
      </div>
    );
  }

  return (
    <>
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
              <h3>{product.price} €</h3>
            </div>
          </div>
        )}
      </section>

      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"red"} />
    </>
  );
};

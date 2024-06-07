import { useProductsStore } from "../store/useProductsStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { MdOutlineStar } from "react-icons/md";
import SimilarProducts  from "../components/SimilarProducts"

export const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct, loadingProduct, singleProduct } =
    useProductsStore();
  const [quantity, setQuantity] = useState(0);
  const addToCart = "Add to Cart"; //productLangData.add-to-cart

  // Adding quantity of items to add to cart
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Removing quantity of items to add to cart
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  console.log("singleproduct", singleProduct);

  return (
    <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
      {loadingProduct ? (
        <Loading />
      ) : !singleProduct || !singleProduct.image || !singleProduct.image.url ? (
        <div className="w-6/12 bg-main-red m-auto mt-24 font-heading text-text-light text-xl text-center">
          <h2>No product found</h2>
          <Loading />
        </div>
      ) : (
        <div className="w-full tablet:w-11/12 tablet:mt-4 tablet:m-auto tablet:flex">
          <img
            src={singleProduct.image.url}
            alt={singleProduct.description}
            className="w-full tablet:w-7/12 desktop:w-4/12 object-cover aspect-square tablet:rounded-xl "
          />
          <div className="w-9/12 m-auto tablet:m-0 py-6 text-text-light font-heading tablet:pl-6">
            <h2 className="font-light text-lg tablet:text-xl mb-2">
              {singleProduct.brand}
            </h2>
            <h3 className="text-xl tablet:text-3xl mb-8">
              {singleProduct.title}
            </h3>
            <p className="mb-8 leading-loose">{singleProduct.description}</p>
            <div className="mb-12 flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <h3 className="text-3xl mb-8">{singleProduct.price} €</h3>
            <div className="flex gap-6">
              <div className="flex">
                <button
                  onClick={handleDecrement}
                  className="bg-text-light text-text-dark w-5 rounded-l-xl"
                >
                  -
                </button>
                <span className="bg-text-light text-text-dark w-12 flex items-center justify-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="bg-text-light text-text-dark w-5 rounded-r-xl"
                >
                  +
                </button>
              </div>
              <button className="w-24 h-6 text-xs bg-main-yellow p-1 rounded-full text-text-dark hover:bg-button-light ">
                {addToCart}
              </button>
            </div>
          </div>
          <SimilarProducts category={singleProduct.category} currentProductId={singleProduct._id}/>
        </div>
        
      )}
    </section>
  );
};

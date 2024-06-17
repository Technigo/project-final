import { NavLink } from "react-router-dom";

import { useProductsStore } from "../store/useProductsStore";

export const ProductCard = ({ data }) => {
  const productData = data;
  //const productLangData = langData; //Should probably be products-list-page
  const { setShoppingCart } = useProductsStore();
  //Change variables to accept incoming data from backend.
  const image = productData.image.url;
  const productName = productData.title;
  const price = `€${productData.price}`;
  const id = productData._id;

  // Change variable to accept data from translation file.
  const addToCart = "Add to Cart"; //productLangData.add-to-cart
  // Adding product to the cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    setShoppingCart(productData, 1);
  };

  return (
    <div className="bg-strong-red m-auto w-full h-full rounded-xl pb-5">
      <NavLink to={`/products/${id}`} aria-label="Link to Product">
        <div>
          <img className="w-full rounded-t-xl" src={image} alt="" />
        </div>
      </NavLink>
      <div className="m-4 flex flex-col items-center h-28 text-white">
        <NavLink to={`/products/${id}`} aria-label="Link to Product">
          <h3 className="font-heading text-xs hover:opacity-75 active:opacity-50 laptop:text-sm  ">
            {productName}
          </h3>
        </NavLink>

        <div className="flex flex-col h-full  justify-end items-center ">
          <p className="font-body my-3 font-bold text-sm">{price}</p>
          <button
            onClick={handleAddToCart}
            className="w-24 text-xs bg-button-light p-1 rounded-full text-text-dark hover:bg-main-yellow"
          >
            {addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};

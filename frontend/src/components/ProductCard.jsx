import { NavLink } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const productData = data;
  //const productLangData = langData; //Should probably be products-list-page

  //Change variables to accept incoming data from backend.
  const image = productData.image.url;
  const productName = productData.title;
  const price = `€${productData.price}`;
  const id = productData._id

  // Change variable to accept data from translation file.
  const addToCart = "Add to Cart"; //productLangData.add-to-cart

  return (
    <div className="bg-strong-red m-auto w-full h-full rounded-xl pb-5">
      {/* <div className="absolute w-[100%] h-[100%]"></div> */}
      <NavLink to={`/products/${id}`}>
        <img className="w-full rounded-t-xl" src={image} alt="" />
      <div className="m-4 flex flex-col items-center justify-between text-white">
        <h3 className="font-heading text-xs laptop:text-sm  ">{productName}</h3>
        <div className="flex flex-col items-center "><p className="font-body my-3 font-bold text-sm">{price}</p>
        <button className="w-24 text-xs bg-button-light p-1 rounded-full text-text-dark hover:bg-main-yellow">
          {addToCart}
        </button>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

import { useProductsStore } from "../store/useProductsStore";
import { NavLink } from "react-router-dom"

export const ShoppingCartPopup = () => {
  const { addedProduct, popupIsVisible } = useProductsStore();

  

  console.log("visible", popupIsVisible)
  console.log("is added", addedProduct)

  return (
    <>
      {popupIsVisible && addedProduct && (
        <div className="fixed top-4 desktop:top-20 z-30 right-4 desktop:right-10 w-3/4 tablet:w-5/12 desktop:w-3/12 h-fit bg-strong-red backdrop-blur-3xl p-4 tablet:p-6 shadow-xl text-text-light font-heading rounded-md flex flex-col  gap-2 desktop:gap-6">
            <h3 className="text-sm laptop:text-xl">Added to cart</h3>
            <div className="flex gap-4">
            <img
                src={addedProduct[0].image.url}
                alt={addedProduct[0].description}
                className="aspect-square object-cover rounded-xl w-2/6 tablet:w-4/12 desktop:w-2/12"
              />
          <ul className="w-full  text-xs tablet:text-base">
            <li className="font-bold">{addedProduct[0].title}</li>
            <li> was added to your cart</li>
            <li className="mt-4"><span className="bg-main-red p-2 rounded-xl">{addedProduct[0].price} €</span></li>
          </ul>
          </div>
          <NavLink to="/cart" className="self-center">
          <button className="w-24 mt-4 text-xs bg-button-light self-center p-1 rounded-full text-text-dark hover:bg-main-yellow">
              Go to cart
            </button>
            </NavLink>

        </div>
      )}
    </>
  );
};

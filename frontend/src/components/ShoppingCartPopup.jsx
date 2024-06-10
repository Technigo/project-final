import { useState, useEffect } from "react";
import { useProductsStore } from "../store/useProductsStore";
import { NavLink } from "react-router-dom"

export const ShoppingCartPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { addedProduct, setAddedProduct } = useProductsStore();

  useEffect(() => {
    if (addedProduct.length > 0) {
      setIsVisible(true);

      // Hide the popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        setAddedProduct(null);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [addedProduct]);

  return (
    <>
      {isVisible && addedProduct && (
        <div className="fixed top-4 z-30 left-4 w-1/2 h-80 bg-white p-4 shadow-xl text-text-dark font-heading rounded-md flex flex-col gap-2">
            <h3 className="text-lg laptop:text-xl">Added to cart</h3>
            <div className="flex gap-4">
            <img
                src={addedProduct[0].image.url}
                alt={addedProduct[0].description}
                className="w-3/6"
              />
          <ul className="w-full">
            <li className="font-bold">{addedProduct[0].title}</li>
            <li> was added to your cart</li>
            <li className="text-main-red mt-4">{addedProduct[0].price} €</li>
          </ul>
          </div>
          <NavLink to="/cart">
          <button className="w-24 text-xs bg-button-light p-1 rounded-full text-text-dark hover:bg-main-yellow">
              Go to cart
            </button>
            </NavLink>

        </div>
      )}
    </>
  );
};

import { useProductsStore } from "../store/useProductsStore";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaTrashCan } from "react-icons/fa6";

export const ShoppingCart = () => {
  const { shoppingCart, removeAllByIdFromCart, removeAllFromCart, totalPrice } =
    useProductsStore();
  const [newquantity, setNewQuantity] = useState();

  // Adding quantity of items to add to cart
  const handleIncrement = () => {
    setNewQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Removing quantity of items to add to cart
  const handleDecrement = () => {
    setNewQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  console.log("shopping cart :", shoppingCart);
  console.log("total price", totalPrice)

  return (
    <section className="bg-main-red h-full min-h-screen pt-4 laptop:pt-12 w-full ">
      <NavLink to="/products">
        <button className="bg-button-varm-light text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full flex justify-center items-center ml-6 desktop:ml-12 mb-8 gap-2">
          <IoIosArrowBack /> Continue shopping
        </button>
      </NavLink>
      <div className="flex-col w-11/12 m-auto text-center font-heading text-text-light">
        <h2 className="text-2xl">Shopping cart</h2>
        <h3>{shoppingCart.length} items</h3>
        {shoppingCart.length > 0 && (
          <button
            onClick={removeAllFromCart}
            className="bg-button-varm-light text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full flex justify-center items-center mb-8 ml-auto"
          >
            Empty cart
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 px-14">
        <ul className=" flex w-9/12 m-auto flex-col gap-4 col-span-2">
          {shoppingCart &&
            shoppingCart.map((item, index) => (
              <li key={index} className=" flex font-heading text-text-light">
                <img
                  src={item.product.image.url}
                  alt={item.product.title}
                  className="rounded-xl w-3/12 laptop:w-2/12 object-cover"
                />
                <div className=" w-full justify-between flex">
                <div className="flex flex-col pl-12 gap-2">
                  <NavLink to={`/products/${item.product._id}`}>
                    <h4 className="text-xl ">{item.product.title}</h4>
                    <h4>{item.product.brand}</h4>
                    <p>{item.product.size}</p>
                  </NavLink>
                </div>
                <div>
                  <div className="flex justify-between">
                  <h3>{item.product.price}</h3>
                <button
                  onClick={() => removeAllByIdFromCart(item.product._id)}
                  className="transparent"
                >
                  {" "}
                  <FaTrashCan />
                </button>
                </div>
                <div className="flex mt-4">
                    <button
                      onClick={handleDecrement}
                      className="bg-text-light text-text-dark w-5 rounded-l-xl"
                    >
                      -
                    </button>
                    <span className="bg-text-light text-text-dark w-12 flex items-center justify-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="bg-text-light text-text-dark w-5 rounded-r-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
                </div>
              </li>
            ))}
        </ul>
        {totalPrice > 0 &&
        <div className="bg-main-white max-h-80 rounded-xl p-10 font-heading flex flex-col justify-between">
          <div>
            <p>Victoria Olofsdottir</p>
            <p>Perstorpsvägen 129</p>
            <p>178 98 Linköping</p>
            <p>Sweden</p>
          </div>
           <h3 className="text-2xl">Total price: <span className="bg-main-yellow rounded-xl p-2 tracking-widest">{totalPrice} €</span></h3>
        </div>
        }
      </div>
    </section>
  );
};

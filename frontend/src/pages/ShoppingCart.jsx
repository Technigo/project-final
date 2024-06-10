import { useProductsStore } from "../store/useProductsStore";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export const ShoppingCart = () => {
  const {
    shoppingCart,
    updateCart,
    removeAllByIdFromCart,
    removeAllFromCart,
    totalPrice,
  } = useProductsStore();
  const [newQuantity, setNewQuantity] = useState(0);
  const recommended = false;

  const handleIncrement = (prevQuantity, id) => {
    setNewQuantity((currentQuantity) => {
      const newQty = prevQuantity + 1; // Increment the previous quantity by 1
      updateCart(newQty, id); // Update the cart with the new quantity
      return newQty; // Return the updated quantity
    });
  };

  const handleDecrement = (prevQuantity, id) => {
    setNewQuantity((currentQuantity) => {
      const newQty = prevQuantity > 0 ? prevQuantity - 1 : 0; // Decrement the previous quantity by 1
      if (newQty > 0) {
        updateCart(newQty, id); // Update the cart with the new quantity
      } else {
        removeAllByIdFromCart(id); // Remove the item from the cart if quantity becomes 0
      }
      return newQty; // Return the updated quantity
    });
  };

  const calculateTotalCost = (item) => {
    const totalCost = item.quantity * item.product.price;
    return `${totalCost}`;
  };

  console.log("shopping cart :", shoppingCart);
  console.log("total price", totalPrice);

  return (
    <section className="bg-main-red h-full min-h-screen pt-4 laptop:pt-12 w-full ">
      <NavLink to="/products">
        <button className="bg-button-varm-light text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full flex justify-center items-center ml-6 desktop:ml-12 mb-8 gap-2">
          <IoIosArrowBack /> Continue shopping
        </button>
      </NavLink>
      <div className="flex-col w-11/12 m-auto text-center font-heading text-text-light">
        <h2 className="text-2xl laptop:text-4xl laptop:mb-4">Shopping cart</h2>
        <h3>
        {shoppingCart.lenght > 0 ? "{shoppingCart.length} items</h3>" : "Your cart is empty"}
        </h3>
        {shoppingCart.length > 0 && (
          <button
            onClick={removeAllFromCart}
            className="bg-button-varm-light text-text-dark text-xs p-2 px-3 laptop:text-sm rounded-full flex justify-center items-center mb-8 ml-auto gap-2"
          >
            <ImCross /> Empty cart
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 px-14">
        <ul className=" flex w-9/12 m-auto flex-col gap-6 col-span-2">
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
                      <h3 className="mt-4">{item.product.price} €</h3>
                    </NavLink>
                    {recommended && (
                      <div className="bg-cta-blue w-fit p-2 rounded-lg">
                        Recommended for you
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex gap-6 justify-end">
                      <div className="flex">
                        <button
                          onClick={() =>
                            handleDecrement(item.quantity, item.product._id)
                          }
                          className="bg-text-light text-text-dark w-5 rounded-l-xl"
                        >
                          -
                        </button>
                        <span className="bg-text-light text-text-dark w-12 flex items-center justify-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleIncrement(item.quantity, item.product._id)
                          }
                          className="bg-text-light text-text-dark w-5 rounded-r-xl"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeAllByIdFromCart(item.product._id)}
                        className="transparent"
                      >
                        {" "}
                        <FaTrashCan />
                      </button>
                    </div>
                    <p className="font-header text-text-light mt-8">
                      subtotal:{" "}
                      <span className="bg-main-yellow rounded-xl p-2 tracking-widest text-text-dark">
                        {calculateTotalCost(item)} €{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        {totalPrice > 0 && (
          <div className="bg-main-white max-h-80 rounded-xl p-10  gap-4 font-heading flex flex-col justify-between">
            <div>
              <p>Victoria Olofsdottir</p>
              <p>Perstorpsvägen 129</p>
              <p>178 98 Linköping</p>
              <p>Sweden</p>
            </div>
            <h3 className="text-2xl">
              Total price:{" "}
              <span className="bg-main-yellow rounded-xl p-2 tracking-widest">
                {totalPrice} €
              </span>
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

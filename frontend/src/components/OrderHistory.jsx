import React, { useEffect } from "react";
import { useProductsStore } from "../store/useProductsStore";

export const OrderHistory = () => {
  const { orderHistory, setOrderHistory, priceHistory, setPriceHistory } =
    useProductsStore();

  useEffect(() => {
    setTimeout(() => {
      setOrderHistory([]);
      setPriceHistory(0);
    }, 10000);
  }, []);

  const calculateTotalCost = (item) => {
    const totalCost = item.quantity * item.product.price;
    const roundedPrice = Math.ceil(totalCost * 100) / 100; // Round up to 2 decimal places
    return `${roundedPrice}`;
  };

  return (
    <>
      <div className="tablet:max-w-[600px] tablet:mx-auto text-text-light flex flex-col gap-8">
        <h2 className="text-2xl mt-8 mb-8 laptop:text-3xl laptop:4 text-center font-heading">
          Thank you for your purchase!
        </h2>
        <p className="font-heading text-xl text-center">
          Total payment: {priceHistory} €
        </p>
        <ul className="w-full flex flex-col gap-8">
          {orderHistory.map((item, index) => (
            <li
              key={index}
              className="flex font-heading justify-center tablet:justify-left gap-4 m-auto tablet:gap-6"
            >
              <img
                src={item.product.image.url}
                alt={item.product.title}
                className="rounded-xl w-4/12 tablet:aspect-square tablet:w-2/12 object-cover"
              />
              <div className="w-6/12 tablet:w-full flex-col tablet:flex-row justify-between flex">
                <div className="flex flex-col gap-2 text-xs tablet:text-sm desktop:text-base">
                  <h3 className="font-black">{item.product.title}</h3>
                  <h3>{item.product.brand}</h3>
                  <p>{item.product.size}</p>
                  <h3 className="mt-4 text-lg desktop:text-xl">
                    {item.product.price} €
                  </h3>
                </div>
                <div className="max-w-max">
                  <div className="flex gap-6 tablet:justify-end">
                    <div className="bg-text-light rounded-full text-text-dark w-6 tablet:w-8 flex items-center justify-center text-xs tablet:text-sm">
                      {item.quantity}
                    </div>
                  </div>
                  <p className="font-header text-text-light text-sm mt-4 tablet:mt-8 laptop:mt-14">
                    subtotal:{" "}
                    <span className="bg-main-yellow rounded-xl p-1 px-2 tablet:p-2 tracking-widest font-bold text-text-dark">
                      {calculateTotalCost(item)} €
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

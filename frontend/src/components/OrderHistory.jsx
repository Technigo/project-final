import React, { useEffect, useRef } from 'react';
import { useProductsStore } from "../store/useProductsStore"
import { useNavigate } from 'react-router-dom';

export const OrderHistory = () => {

    const { orderHistory, setOrderHistory } = useProductsStore()

    const navigate = useNavigate();
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        // Clear orderHistory when navigating away
        const unlisten = navigate((location) => {
            setOrderHistory([]);
        });
        return () => {
            unlisten();
        };
    }, [navigate, setOrderHistory]);

  return (
    <>
    {orderHistory > 0 && (
    <div className="tablet:max-w-[600px] tablet:m-auto">
    <h2 className="text-2xl mt-8 mb-8 laptop:text-3xl laptop:mb-12 text-center">
     Thank you for your purchase!
    </h2>
    <ul className="w-full flex flex-col gap-8">
      {orderHistory.map((item, index) => (
        <li
          key={index}
          className="flex font-heading justify-center tablet:justify-left gap-4 m-auto tablet:gap-6 text-text-light"
        >
          <img
            src={item.product.image.url}
            alt={item.product.title}
            className="rounded-xl w-4/12 tablet:aspect-square tablet:w-2/12 object-cover"
          />
          <div className="w-6/12 tablet:w-full flex-col tablet:flex-row justify-between flex">
            <div className="flex flex-col gap-2 text-xs tablet:text-sm desktop:text-base">
              <h4 className="font-black">{item.product.title}</h4>
              <h4>{item.product.brand}</h4>
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
  )}
  </>
  )
}
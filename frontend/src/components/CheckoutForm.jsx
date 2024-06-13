import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import { useProductsStore } from "../store/useProductsStore";

const CheckoutForm = ({ totalPrice }) => {
  const { handlePayment, paymentStatus, isLoading, shoppingCart } =
    useProductsStore();
  const stripe = useStripe();
  const elements = useElements();
  // const [paymentStatus, setPaymentStatus] = useState("");
  const [showMessage, setShowMessage] = useState(false); 

  console.log("totalprice in checkoutform: ", totalPrice);
  // Define the product details
  const product = {
    items: shoppingCart,
    /* description: "High-quality cotton t-shirt", */
    price: totalPrice,
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  // function handlePaymentWrapper(stripe, elements) {
  //   handlePayment(stripe, elements);
  // }

  const handleSubmit = async (event) => {

    await handlePayment(event, stripe, elements, product);
        setShowMessage(true);
  };

  const calculateTotalCost = (item) => {
    const totalCost = item.quantity * item.product.price;
    const roundedPrice = Math.ceil(totalCost * 100) / 100; // Round up to 2 decimal places
    return `${roundedPrice}`;
  };
  // Then, you can pass this wrapper function to onSubmit

  console.log("Payment status:", paymentStatus);

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
     
      <div className="bg-main-white text-text-dark max-w-[500px] mx-auto max-h-80 rounded-xl p-6 desktop:p-10  gap-4 font-heading text-xs desktop:text-sm ">
        <p className="text-2xl my-2">Price: € {product.price}</p>
        <p>Enter your card details to order:</p>
        <CardElement options={cardElementOptions} />
        <button
          type="submit"
          className="bg-cta-blue text-text-light m-auto w-full mt-8 rounded-full px-5 p-2"
          disabled={!stripe || isLoading}
        >
          {isLoading ? "Processing..." : "Buy Now"}
        </button>
        {showMessage ?    <div
          className={`payment-status ${
            paymentStatus === "Payment successful!"
              ? "text-green-500 text-center mt-6"
              : "text-red-500text-center mt-6"
          }`}
        >
          {paymentStatus}
        </div> : null }
     
      </div>
      {/* Product details */}
      <div className="mx-10 tablet:max-w-[500px] tablet:m-auto">
        <h2 className="text-2xl mt-8 mb-4 laptop:text-4xl laptop:mb-4">
          What you are buying:
        </h2>
        <ul className=" w-full flex flex-col gap-4 tablet:gap-8">
          {product.items &&
            product.items.map((item, index) => (
              <li
                key={index}
                className=" flex font-heading justify-center tablet:justify-left gap-4 m-auto tablet:gap-6 text-text-light"
              >
                <img
                  src={item.product.image.url}
                  alt={item.product.title}
                  className="rounded-xl w-4/12 tablet:aspect-square tablet:w-2/12  object-cover"
                />
                <div className=" w-6/12 tablet:w-full flex-col tablet:flex-row justify-between flex">
                  <div className="flex flex-col gap-2 text-xs tablet:text-sm desktop:text-base ">
                    <h4 className="font-black">{item.product.title}</h4>
                    <h4>{item.product.brand}</h4>
                    <p>{item.product.size}</p>
                    <h3 className="mt-4 desktop:text-xl">
                      {item.product.price} €
                    </h3>
                  </div>
                  <div className="max-w-max">
                    <div className="flex gap-6 tablet:justify-end">
                      <div className="flex h-6">
                        <span className="bg-text-light rounded-full text-text-dark w-6 tablet:w-8 desktop:w-12 flex items-center justify-center text-xs tablet:text-sm">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                    <p className="font-header text-text-light text-sm mt-4 tablet:mt-8 laptop:mt-14 ">
                      subtotal:{" "}
                      <span className="bg-main-yellow rounded-xl p-1 px-2 tablet:p-2 tracking-widest font-bold text-text-dark">
                        {totalPrice} €{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
};



export default CheckoutForm;

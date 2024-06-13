import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

import { useProductsStore } from "../store/useProductsStore";

const CheckoutForm = () => {
  const { handlePayment, paymentStatus, isLoading, totalPrice, shoppingCart } =
    useProductsStore();
  const stripe = useStripe();
  const elements = useElements();
  /*   const [paymentStatus, setPaymentStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); */

  // Define the product details
  const product = {
    items: shoppingCart,
    description: "High-quality cotton t-shirt",
    price: totalPrice,
  };

  console.log(product.items);

  /* const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://project-final-glim.onrender.com/stripe/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: product.price * 100, // Convert price to cents
            productName: product.name,
            productDescription: product.description,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from server:", data);

      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        console.error(result.error.message);
        setPaymentStatus(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
          setPaymentStatus("Payment successful!");
        } else {
          console.error(
            "Unexpected payment status:",
            result.paymentIntent.status
          );
          setPaymentStatus(
            `Unexpected payment status: ${result.paymentIntent.status}`
          );
        }
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus(`Error: ${error.message}`);
    }

    setIsLoading(false);
  }; */

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
  };

  const calculateTotalCost = (item) => {
    const totalCost = item.quantity * item.product.price;
    const roundedPrice = Math.ceil(totalCost * 100) / 100; // Round up to 2 decimal places
    return `${roundedPrice}`;
  };
  // Then, you can pass this wrapper function to onSubmit

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      {/* Product details */}
      <div>
        <ul className=" w-full flex flex-col gap-4 tablet:gap-8">
          {product &&
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
                        {calculateTotalCost(item)} €{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col items-end">
        <p>Price: EUR {product.price}</p>
        <CardElement options={cardElementOptions} />
        <button
          type="submit"
          className="bg-cta-blue rounded-full px-5 p-2"
          disabled={!stripe || isLoading}
        >
          {isLoading ? "Processing..." : "Buy Now"}
        </button>
      </div>

      <div
        className={`payment-status ${
          paymentStatus === "Payment successful!" ? "success" : ""
        }`}
      >
        {paymentStatus}
      </div>
    </form>
  );
};

export default CheckoutForm;

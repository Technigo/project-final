import { Radio } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FaAddressCard } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { Error } from "../components/Error";

import card from "../assets/icons/card.svg";
import { useUserStore } from "../stores/useUserStore";
import { useState } from "react";

export const PaymentForm = ({ register, payment, setPayment }) => {
  const [klarnaWidgetLoaded, setKlarnaWidgetLoaded] = useState(false);
  const { createPaymentSession, error } = useUserStore((state) => ({
    createPaymentSession: state.createPaymentSession,
    error: state.error,
  }));
  const payWithKlarna = async () => {
    setPayment("klarna");
    if (klarnaWidgetLoaded) return;
    const Klarna = window.Klarna;
    const client_token = await createPaymentSession();
    if (client_token) {
      try {
        //initiate klarna SDK
        Klarna.Payments.init({
          client_token: client_token,
        });
        // load klarna widget
        Klarna.Payments.load(
          {
            container: "#klarna-payments-container",
            payment_method_category: "pay_later",
          },
          {},
          (res) => {
            if (res.show_form) setKlarnaWidgetLoaded(true);
          },
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="my-5 flex w-full flex-col gap-y-4 font-montserrat">
      <p className="col-span-2 my-2 font-lato">
        *These inputs are already filled in and can&apos;t be changed, since
        this is not a real web shop.
      </p>
      <div className="flex w-full flex-col gap-2 font-bold">
        <div className="flex flex-row gap-8">
          <Radio
            name="payment"
            id="klarna"
            label="Pay with Klarna"
            className="border-light-blue checked:border-light-blue"
            onChange={payWithKlarna}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="#3D52A0"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            }
          />
          <img
            src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
            alt="klarna logo"
          />
        </div>
        <div id="klarna-payments-container"></div>
        <div className="flex flex-row gap-10">
          <Radio
            name="payment"
            className="border-light-blue checked:border-light-blue"
            label="Pay with Card"
            defaultChecked
            onChange={() => setPayment("card")}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="#3D52A0"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            }
          />
          <img className="w-10" src={card} alt="credit card icon" />
        </div>
      </div>
      {payment === "card" && (
        <>
          <div className="relative col-span-2">
            <label htmlFor="cardHolder" className="hidden">
              Card Holder
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border border-light-blue px-10 py-3 text-sm uppercase shadow-sm outline-none focus:z-10"
              placeholder="Your full name here"
              {...register("cardHolder", { required: true })}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <IconContext.Provider value={{ className: "text-blue text-lg" }}>
                <FaAddressCard />
              </IconContext.Provider>
            </div>
          </div>
          <div className="relative col-span-2">
            <label htmlFor="cardNumber" className="hidden">
              Credit Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border border-light-blue px-10 py-3 text-sm uppercase shadow-sm outline-none focus:z-10"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              {...register("cardNumber", { required: true })}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <IconContext.Provider value={{ className: "text-blue text-lg" }}>
                <IoLockClosed />
              </IconContext.Provider>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-4">
            <input
              type="text"
              name="expiry"
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border border-light-blue px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10"
              placeholder="MM/YY"
              {...register("expiry", { required: true })}
            />
            <input
              type="text"
              name="cvc"
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border border-light-blue px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10"
              placeholder="CVC"
              {...register("cvc", { required: true })}
            />
          </div>
        </>
      )}
      {error && <Error error={error} />}
    </div>
  );
};
PaymentForm.propTypes = {
  register: PropTypes.func.isRequired,
  payment: PropTypes.string.isRequired,
  setPayment: PropTypes.func.isRequired,
};

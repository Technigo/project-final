import { Radio } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { FaAddressCard } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import PropTypes from "prop-types";

export const PaymentForm = ({ register }) => {
  return (
    <div className="my-5 grid gap-y-4 font-montserrat">
      <p className="col-span-2 my-2 font-lato">
        *These inputs are already filled in and can&apos;t be changed, since
        this is not a real web shop.
      </p>
      <div className="flex flex-col gap-2 font-bold w-full">
        <Radio
          name="payment"
          label="Pay with Klarna"
          className="border-light-blue checked:border-light-blue"
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
          defaultChecked
        />
        <Radio
          name="payment"
          className="border-light-blue checked:border-light-blue"
          label="Pay with Card"
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
      </div>
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
    </div>
  );
};
PaymentForm.propTypes = {
  register: PropTypes.func.isRequired,
};

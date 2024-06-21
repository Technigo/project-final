import { Navigate } from "react-router-dom";

import thankYouImage from "../assets/images/thank-you.jpg";
import { Breadcrumb } from "../components/Breadcrumb";
import { useProductStore } from "../stores/useProductStore";

export const OrderConfirmation = () => {
  const checkoutComplete = useProductStore((state) => state.checkoutComplete);
  if (!checkoutComplete) return <Navigate to="/checkout" replace />;
  return (
    <main>
      <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-6 flex flex-col items-center lg:mx-auto lg:max-w-screen-lg lg:flex-initial lg:items-start">
          <h1 className="mt-10 font-poppins font-bold lg:mb-10">Thank you!</h1>

          <div className="flex flex-col justify-center lg:mx-auto">
            <div className="flex justify-center">
              <img
                src={thankYouImage}
                alt="laptop"
                className="my-10 w-full max-w-md"
              />
            </div>
            <div>
              <h2 className="mb-6 font-poppins font-bold text-blue">
                But... you won&apos;t get your product
              </h2>
              <p className="mb-20 font-lato text-sm lg:text-lg">
                Thanks for Playing Along!
                <br />
                Your checkout process was just a simulation—no money was
                withdrawn and no products will be shipped. <br />
                We&apos;d love to hear any feedback you have about your
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

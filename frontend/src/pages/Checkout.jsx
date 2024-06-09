import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { Dropdown } from "../components/Dropdown";
import { Form } from "../components/Form";
import { PaymentForm } from "../components/PaymentForm";
import { ShippingForm } from "../components/ShippingForm";

export const Checkout = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="mx-auto my-4 flex w-fit flex-col items-center gap-8 text-center">
        <h1 className="font-bold">Checkout</h1>
        <h2 className="w-3/4 text-xl">
          Please fill out the form below to complete your purchase.
        </h2>
        <Dropdown text="YOUR ACCOUNT" content={<Form isLogin={true} />} />
        <Dropdown text="DELIVERY DETAILS" content={<ShippingForm />} />
        <Dropdown
          text="YOUR ORDER"
          content={
            <CartItem className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
          }
        />
        <Dropdown text="PAYMENT METHOD" content={<PaymentForm />} />
        <div className="flex flex-col items-center gap-8">
          <Button text="PAY NOW" />
          <Button text="CONTINUE SHOPPING" style="white" />
        </div>
        <p className="w-3/4 font-lato text-base">
          *Please remember, this is not an actual shop, no money will be drawn,
          and unfortunately no products will be sent. But thank you for testing
          it out!
        </p>
      </div>
    </div>
  );
};

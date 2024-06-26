import { useForm } from "react-hook-form";

import { AccountInfo } from "../components/AccountInfo";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { Dropdown } from "../components/Dropdown";
import { EmptyCart } from "../components/EmptyCart";
import { OrderValue } from "../components/OrderValue";
import { PaymentForm } from "../components/PaymentForm";
import { ShippingForm } from "../components/ShippingForm";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import sampleCustomer from "../data/sampleCustomer.json";

export const Checkout = () => {
  const [payment, setPayment] = useState("card");
  const navigate = useNavigate();
  const { cart, clearCart } = useUserStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));

  const { products, handleCheckOut } = useProductStore((state) => ({
    products: state.products,
    handleCheckOut: state.handleCheckOut,
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }, // check if data fulfills the requirements
  } = useForm();

  const authorizePayment = () => {
    const Klarna = window.Klarna;
    try {
      // authorize and redirect to klarna payment
      Klarna.Payments.authorize(
        { payment_method_category: "pay_later" },
        sampleCustomer,
        function (res) {
          console.log("Success", res);
          if (res.approved) {
            onSubmit();
            navigate("/order-confirmation");
          }
        },
      );
    } catch (error) {
      console.log("Failed", error);
    }
  };
  const onSubmit = () => {
    handleCheckOut();
    clearCart();
  };

  const fillDummyData = () => {
    reset(
      {
        firstName: "Alice",
        lastName: "Test",
        email: "customer@email.se",
        phone: "+46701740615",
        address: "Södra Blasieholmshamnen 2",
        zipCode: "11 148",
        city: "Stockholm",
        country: "SE",
        cardHolder: "Alice Test",
        cardNumber: "4111 1111 1111 1111",
        expiry: "12/28",
        cvc: "123",
      },
      { keepTouched: false },
    );
  };
  if (!cart.length) return <Navigate to="/cart" replace />;

  return (
    <main>
      <Breadcrumb />
      <div className="mb-20 mt-10">
        <form
          className="mx-auto flex w-fit flex-col items-center gap-8 text-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold">Checkout</h1>
          <h2 className="w-3/4 font-lato text-base lg:lg:text-lg">
            Please fill out the form below to complete your purchase.
          </h2>
          <Dropdown text="YOUR ACCOUNT" content={<AccountInfo />} />
          <Dropdown
            text="DELIVERY DETAILS"
            content={<ShippingForm register={register} />}
          />
          <Dropdown
            text="YOUR ORDER"
            content={
              cart.length > 0 ? (
                products
                  .filter((product) => cart.includes(product._id))
                  .map((product) => (
                    <CartItem
                      key={product._id}
                      name={product.templateName}
                      id={product._id}
                      image={product.image}
                      price={product.price}
                      className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                      irremovable={true}
                    />
                  ))
              ) : (
                <EmptyCart />
              )
            }
          />
          <Dropdown
            text="PAYMENT METHOD"
            content={
              <PaymentForm
                register={register}
                payment={payment}
                setPayment={setPayment}
              />
            }
          />

          <Button
            text="Use Dummy Data"
            type="button"
            onClickFunc={fillDummyData}
          />

          <OrderValue cart={cart} products={products} />

          <div className="flex flex-col items-center gap-8">
            <Button
              text="PAY NOW"
              onClickFunc={handleSubmit(
                payment === "klarna" ? authorizePayment : onSubmit,
              )}
              navTo="/order-confirmation"
              disabled={cart.length === 0 || !isValid}
            />
            <Button
              text="CONTINUE SHOPPING"
              style="white"
              navTo="/products"
              type="button"
            />
          </div>
          <p className="w-3/4 font-lato text-base">
            *Please remember, this is not an actual shop, no money will be
            drawn, and unfortunately no products will be sent. But thank you for
            testing it out!
          </p>
        </form>
      </div>
    </main>
  );
};

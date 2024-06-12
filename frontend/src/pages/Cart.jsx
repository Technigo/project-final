import { Link } from "react-router-dom";

import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { EmptyCart } from "../components/EmptyCart";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";

export const Cart = () => {
  const { cart, clearCart } = useUserStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));
  const products = useProductStore((state) => state.products);
  const calculateOrderValue = () => {
    return products
      .filter((product) => cart.includes(product._id))
      .reduce((total, item) => total + item.price, 0);
  };

  const orderValue = calculateOrderValue();
  const vat = orderValue * 0.25;
  const total = orderValue + vat;

  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col items-center">
        <h3 className="mb-5 font-montserrat font-bold sm:self-center lg:ml-5 lg:self-start">
          Your cart items
        </h3>
        {cart.length > 0 ? (
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
              />
            ))
        ) : (
          <EmptyCart />
        )}
        <div className="mt-5 flex h-[120px] min-w-[300px] flex-col text-sm font-bold leading-8 before:font-montserrat">
          <div className="flex justify-between">
            <span>Order Value</span>
            <span>€{orderValue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT</span>
            <span>€{vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>
        <div className="mb-10 flex flex-col items-center gap-5">
          <Link to="/checkout">
            <Button
              text="CONTINUE"
              style="button"
              disabled={cart.length === 0}
            />
          </Link>
          <Link to="/products">
            <Button text="CONTINUE SHOPPING" style="button" />
          </Link>
          <Button text="CLEAR CART" style="button" onClickFunc={clearCart} />
        </div>
        <div className="flex justify-center">
          <p className="mb-10 w-[300px] p-3 text-center font-lato">
            *Please remember, this is not an actual shop, no money will be
            drawn, and unfortunately no products will be sent*.
          </p>
        </div>
      </div>
    </>
  );
};

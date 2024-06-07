// //importera pcl när den är välkommen tillbaka in i main.
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Breadcrumb } from "../components/Breadcrumb";
import { CartItem } from "../components/CartItem";

const cartItems = [
  { id: "", templateName: "", price: 150 },
  { id: "", templateName: "", price: 134 },
  { id: "", templateName: "", price: 3388 },
];

// eslint-disable-next-line react/prop-types
export const Cart = () => {
  const calculateOrderValue = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
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
        <CartItem className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
        <CartItem className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
        <CartItem className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
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
            <Button text={"CONTINUE"} style="submit" />
          </Link>
          <Link to="/products">
            <Button text={"CONTINUE SHOPPING"} style="submit" />
          </Link>
            <Button text={"CLEAR CART"} style="submit" />
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

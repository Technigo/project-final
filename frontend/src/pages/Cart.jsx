import { Link } from "react-router-dom";

import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { EmptyCart } from "../components/EmptyCart";
import { Loading } from "../components/Loading";
import { OrderValue } from "../components/OrderValue";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";

export const Cart = () => {
  const { accessToken, cart, clearCart, clearNonLoginCart, loading } =
    useUserStore((state) => ({
      accessToken: state.accessToken,
      cart: state.cart,
      clearCart: state.clearCart,
      clearNonLoginCart: state.clearNonLoginCart,
      loading: state.loading,
    }));
  const products = useProductStore((state) => state.products);
  return (
    <main>
      <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center justify-center lg:max-w-screen-md">
          <div className="flex w-full flex-col items-center lg:max-w-screen-md lg:items-start">
            <h1 className="my-10 font-poppins font-bold lg:my-20">
              Your cart items
            </h1>
          </div>

          <div className="mx-auto flex flex-col items-center">
            {loading ? (
              <Loading />
            ) : cart.length > 0 ? (
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
            <OrderValue
              cart={cart}
              products={products}
              className="text-md my-10 flex w-[300px] flex-col px-6 font-bold leading-8 before:font-montserrat"
            />
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
              <Button
                text="CLEAR CART"
                style="button"
                onClickFunc={() => {
                  accessToken ? clearCart() : clearNonLoginCart();
                }}
                disabled={cart.length === 0}
              />
            </div>
            <div className="flex justify-center">
              <p className="mb-20 p-3 text-center font-lato">
                *Please remember, this is not an actual shop, no money will be
                drawn, and unfortunately no products will be sent*.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

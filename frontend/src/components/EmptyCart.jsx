import emptyCart from "../assets/empty-cart.png";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-28">
        <img
          src={emptyCart}
          alt="no items in the cart"
          className="object-cover"
        />
      </div>
      <p className="font-lato text-base">No items in the cart</p>
    </div>
  );
};

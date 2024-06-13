import { useUserStore } from "../stores/useUserStore";
import { useProductStore } from "../stores/useProductStore";

export const OrderValue = () => {
  const { cart } = useUserStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
    loading: state.loading,
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
    <div className="text-md my-10 flex w-[300px] flex-col px-6 font-bold leading-8 before:font-montserrat">
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
  );
};

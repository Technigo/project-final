import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
export const CartRoute = () => {
  const { cart } = useUserStore((state) => ({
    cart: state.cart,
  }));
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }
  return <Outlet />;
};

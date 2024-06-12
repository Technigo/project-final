import { Route, Routes } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { MyPage } from "../pages/MyPage";
import { NotFound } from "../pages/NotFound";
import { OrderConfirmation } from "../pages/OrderConfirmation";
import { ProductDetail } from "../pages/ProductDetail";
import { ProductList } from "../pages/ProductList";
import { Signup } from "../pages/Signup";
import { AboutUs } from "../pages/AboutUs";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:Id" element={<ProductDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

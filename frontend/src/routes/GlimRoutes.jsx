import { Route, Routes } from "react-router-dom";

import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { LogInPage } from "../pages/LogInPage";
import { NotFound } from "../pages/NotFound";
import { ProductsPage } from "../pages/ProductsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ShoppingCart } from "../pages/ShoppingCart";
import { SignUpPage } from "../pages/SignUpPage";
import { SingleProductPage } from "../pages/SingleProductPage";

export const GlimRoutes = ({ data}) => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data["homepage"]} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/*" element={<NotFound />} />

      {/* Add the routes */}
    </Routes>
  );
};

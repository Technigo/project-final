import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { ProfilePage } from "../pages/ProfilePage";
import { ProductsPage } from "../pages/ProductsPage";
import { SingleProductPage } from "../pages/SingleProductPage";
import { NotFound } from "../pages/NotFound";

export const GlimRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/*" element={<NotFound />} />

      {/* Add the routes */}
    </Routes>
  );
};

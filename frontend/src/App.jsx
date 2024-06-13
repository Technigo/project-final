import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./common/Footer/Footer";
import { Header } from "./common/Header/Header";
import { AllProducts } from "./pages/AllProducts/AllProducts";
import { Cart } from "./pages/Cart/Cart";
import { Category } from "./pages/Category/Category";
import { Home } from "./pages/Home/Home";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { OrderConfirmation } from "./pages/OrderConfirmation/OrderConfirmation";

export const App = () => {
  return (
    <>
      {/* Any component that is within the browser-router can expose routes & use links  */}
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<OrderConfirmation />} />
            <Route path="/products/category/:category" element={<Category />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route
              path="/products/category/:category/:productId"
              element={<SingleProduct />}
            />
            {/* Any time a user clicks on a page that is not  found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

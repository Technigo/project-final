import { Home } from "./pages/Home/Home";
import { AllProducts } from "./pages/AllProducts/AllProducts";
import { Category } from "./pages/Category/Category";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Footer } from "./common/Footer/Footer";
import { Header } from "./common/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HamburgerMenu } from "./common/Header/HamburgerMenu";

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
            <Route path="/products/category/:category" element={<Category />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route
              path="/products/category/:category/:productId"
              element={<SingleProduct />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

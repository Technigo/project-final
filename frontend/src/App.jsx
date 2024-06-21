import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

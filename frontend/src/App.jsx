import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

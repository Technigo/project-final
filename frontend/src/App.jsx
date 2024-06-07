import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoute } from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
      <Footer />
    </BrowserRouter>
  );
};

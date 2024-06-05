import { BrowserRouter } from "react-router-dom";
import { HomeRoutes } from "./routes/HomeRoutes";
import { Header } from "./components/Navigation/Header";
import { PlanetsCarousel } from "./components/PlanetsCarousel";
//import { PlanetsCarousel } from "./components/PlanetsCarousel"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomeRoutes />
    </BrowserRouter>
  );
};

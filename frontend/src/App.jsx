import { BrowserRouter } from "react-router-dom";
import { PlanetRoutes } from "./routes/PlanetRoutes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <PlanetRoutes />
      </BrowserRouter>
    </>
  );
};

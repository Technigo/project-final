import { BrowserRouter } from "react-router-dom";
import { PlanetRoutes } from "./routes/PlanetRoutes";
import { Calculator } from "./components/Calculator";


export const App = () => {
  return (
    <>
      <Calculator/>
      <BrowserRouter>
      <PlanetRoutes />
      </BrowserRouter>
    </>
  );
};

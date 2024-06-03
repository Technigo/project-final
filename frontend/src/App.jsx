import { BrowserRouter } from "react-router-dom"
import { PlanetRoutes } from "./routes/PlanetRoutes"
//import { PlanetsCarouselProvider } from "../src/contexts/PlanetsCarouselContext";
import { Calculator } from "./components/Calculator"
import { SpaceFeed } from "./components/SpaceFeed"

//import { AllPlanets } from "./components/AllPlanets";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <PlanetRoutes />
      </BrowserRouter>
    </>
  )
}

{
  /* 
  <PlanetsCarouselProvider/>
*/
}

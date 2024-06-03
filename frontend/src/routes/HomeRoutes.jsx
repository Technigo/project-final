import { Routes, Route } from "react-router-dom";
import { SpaceFeed } from "../components/SpaceFeed";
import { Calculator } from "../components/Calculator";
import { AllPlanets } from "../components/AllPlanets";
import { Planet } from "../components/Planet";
import { FallBackPage } from "../components/FallBackPage";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SpaceFeed />
            <Calculator />
            <AllPlanets />
          </>
        }
      />
      <Route path="/planets/:planet" element={<Planet />} />
      <Route path="*" element={<FallBackPage />} />
    </Routes>
  );
};

{
  /* 
  <PlanetsCarouselProvider/>
  //import { PlanetsCarouselProvider } from "../src/contexts/PlanetsCarouselContext";
*/
}

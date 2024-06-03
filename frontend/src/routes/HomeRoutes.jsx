import { Routes, Route } from "react-router-dom"
import { SpaceFeed } from "../components/SpaceFeed"
import { Calculator } from "../components/Calculator"
import { AllPlanets } from "../components/AllPlanets"
import { Planet } from "../components/Planet"
import { NotFoundPage } from "../components/NotFoundPage"

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

{
  /* 
  <PlanetsCarouselProvider/>
  //import { PlanetsCarouselProvider } from "../src/contexts/PlanetsCarouselContext";
*/
}

import { Routes, Route } from "react-router-dom"
import { AllPlanets } from "../components/AllPlanets"
import { Planet } from "../components/Planet"
import { NotFound } from "../components/NotFound"
import { Calculator } from "../components/Calculator"
import { SpaceFeed } from "../components/SpaceFeed"

export const PlanetRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AllPlanets />
            <SpaceFeed />
            <Calculator />
          </>
        }
      />
      <Route path="/planets/:planet" element={<Planet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

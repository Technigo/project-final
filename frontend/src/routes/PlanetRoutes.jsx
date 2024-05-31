import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PlanetCards } from "../components/PlanetCards"
import { ShowPlanet } from "../components/ShowPlanet"

export const PlanetRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mercury" element={<PlanetCards name="Mercury" />} />
        <Route path="/venus" element={<PlanetCards name="Venus" />} />
        <Route path="/earth" element={<PlanetCards name="Earth" />} />
        <Route path="/mars" element={<PlanetCards name="Mars" />} />
        <Route path="/jupiter" element={<PlanetCards name="Jupiter" />} />
        <Route path="/saturn" element={<PlanetCards name="Saturn" />} />
        <Route path="/neptune" element={<PlanetCards name="Neptune" />} />
        <Route path="/uranus" element={<PlanetCards name="Uranus" />} />
        <Route path="/pluto" element={<PlanetCards name="Pluto" />} />
        <Route path="/planets/:name" element={<ShowPlanet />} />
      </Routes>
    </BrowserRouter>
  )
}

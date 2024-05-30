// import { BrowserRouter } from "react-router-dom";
// import { PlanetRoutes } from "./routes/PlanetRoutes";
// import { Calculator } from "./components/Calculator";

import { PlanetCards } from "./components/PlanetCards"
import { SpaceFeed } from "./components/SpaceFeed"

export const App = () => {
  return (
    <>
      <PlanetCards />
      <SpaceFeed />
    </>
  )
}

{
  /* <Calculator/>
<BrowserRouter>
<PlanetRoutes />
</BrowserRouter> */
}

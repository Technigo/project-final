import { Fonts } from "./components/Fonts"
import { BrowserRouter } from "react-router-dom"
import { HomeRoutes } from "./routes/HomeRoutes"
import { Header } from "./components/Navigation/Header"
import GlobalStyles from "./components/GlobalStyles"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <BrowserRouter>
        <Header />
        <HomeRoutes />
      </BrowserRouter>
    </>
  )
}

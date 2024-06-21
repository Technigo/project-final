import { BrowserRouter } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles"
import { HomeRoutes } from "./routes/HomeRoutes"
import { Header } from "./components/Navigation/Header"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <HomeRoutes />
      </BrowserRouter>
    </>
  )
}

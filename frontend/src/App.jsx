import { BrowserRouter } from "react-router-dom"
import { HomeRoutes } from "./routes/HomeRoutes"
import { Header } from "./components/Navigation/Header"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomeRoutes />
    </BrowserRouter>
  )
}

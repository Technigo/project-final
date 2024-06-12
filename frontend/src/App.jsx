import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetailPage } from "./pages/DetailPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { UserPage } from "./pages/UserPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { ReferencePage } from "./pages/ReferencePage"
import { ShopPage } from "./pages/ShopPage"
import { MuseumPage } from "./pages/MuseumPage"
import Layout from "./Layout"
import "leaflet/dist/leaflet.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/:slug" element={<DetailPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/museums" element={<MuseumPage />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/references" element={<ReferencePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

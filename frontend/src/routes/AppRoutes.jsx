import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../sections/homePage/HomePage";
import RentalPage from "../sections/rentalPage/RentalPage";
import FaqPage from "../sections/faqPage/FaqPage";
import ProfilePage from "../sections/profilePage/ProfilePage";
import LoginPage from "../sections/auth/LoginPage";
import RegisterPage from "../sections/auth/RegisterPage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ScrollToTop from "../components/ScrollToTop";
import AboutPage from "../components/AboutPage";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/rentals"
          element={<ProtectedRoute element={<RentalPage />} />}
        />
        <Route path="/faq" element={<ProtectedRoute element={<FaqPage />} />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
};

export default AppRoutes;

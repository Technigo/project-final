import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../sections/homePage/HomePage";
import RentalPage from "../sections/rentalPage/RentalPage";
import FaqPage from "../sections/faqPage/FaqPage";
import ProfilePage from "../sections/profilePage/ProfilePage";
import LoginPage from "../sections/auth/LoginPage";
import RegisterPage from "../sections/auth/RegisterPage";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rentals" element={<RentalPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;

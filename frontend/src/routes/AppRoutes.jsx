import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../sections/homePage/HomePage";
import RentalPage from "../sections/rentalPage/RentalPage";
import FaqPage from "../sections/faqPage/FaqPage";
import ProfilePage from "../sections/profilePage/ProfilePage";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rentals" element={<RentalPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;

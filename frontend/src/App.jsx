import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { Hero } from "./components/Header/Hero";
import { Booking } from "./components/Booking";
import { Introduction } from "./components/Introduction";
import { Footer } from "./components/Footer/Footer";

import { MeetingSection } from "./components/MeetingSection/MeetingSection";
import { SliderComp } from "./components/MeetingSection/SliderComp";

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Booking />
      <Introduction />
      <MeetingSection />
      <SliderComp />
      <Footer />
    </div>
  );
};

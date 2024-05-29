import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { SignUpPage } from "./components/SignUpPage";
import { EventsPage } from "./components/EventsPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { CommunityGuidelines } from "./components/CommunityGuidelines";
import { SupportWall } from "./components/SupportWall";
import { FindOutMorePage } from "./components/FindOutMorePage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-out-more" element={<FindOutMorePage />} />
        <Route path="/signup-listener" element={<SignUpPage />} />
        <Route path="/signup-seeker" element={<SignUpPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about" element={<SupportWall />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
      </Routes>
    </Router>
  );
};

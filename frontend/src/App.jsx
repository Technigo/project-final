import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventsPage } from "./components/eventPage/EventsPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { CommunityGuidelines } from "./components/CommunityGuidelines";
import { Profile } from "./components/registration/Profile";
import { ModalProvider } from "./components/registration/ModalContext";
import { FindOutMorePage } from "./mainPage/FindOutMorePage";
import { HomePage } from "./mainPage/HomePage";

export const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-out-more" element={<FindOutMorePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route
            path="/community-guidelines"
            element={<CommunityGuidelines />}
          />
        </Routes>
      </Router>
    </ModalProvider>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
/* import { Login } from "./components/registration/Login";
import { SignUpPage } from "./components/registration/SignUpPage"; */
import { EventsPage } from "./components/EventsPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { CommunityGuidelines } from "./components/CommunityGuidelines";
import { FindOutMorePage } from "./components/FindOutMorePage";
import Profile from "./components/registration/Profile";
import { ModalProvider } from "./components/registration/ModalContext";

export const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-out-more" element={<FindOutMorePage />} />
          {/*   <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} /> */}
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

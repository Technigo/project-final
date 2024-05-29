import Navbar from "./components/Navbar";
import Header from "./sections/homePage/Header";
import IntroSection from "./sections/homePage/IntroSection";
import AccountSection from "./sections/homePage/AccountSection";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <IntroSection />
      <AccountSection />
    </div>
  );
};

import Navbar from "./components/Navbar";
import Header from "./sections/homePage/Header";
import IntroSection from "./sections/homePage/IntroSection";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <IntroSection />
    </div>
  );
};

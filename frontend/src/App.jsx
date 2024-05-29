import Navbar from "./components/Navbar";
import Header from "./sections/homePage/Header";
import IntroSection from "./sections/homePage/IntroSection";
import AccountSection from "./sections/homePage/AccountSection";
import SeeRentalsButton from "./sections/homePage/SeeRentalsButton";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <IntroSection />
      <AccountSection />
      <SeeRentalsButton />
      <Footer />
    </div>
  );
};

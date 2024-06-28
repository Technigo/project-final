import Header from "./Header";
import IntroSection from "./IntroSection";
import AccountSection from "./AccountSection";
import SeeRentalsButton from "./SeeRentalsButton";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <IntroSection />
      <AccountSection />
      <SeeRentalsButton />
    </div>
  );
};

export default HomePage;

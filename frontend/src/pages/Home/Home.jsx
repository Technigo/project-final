import { Banner } from "./components/Banner/Banner";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";
import { Hero } from "./components/Hero/Hero";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import "./Home.css";
import { DeliveryStatements } from "./components/DeliveryStatements/DeliveryStatements";
import { NewArrivalsSection } from "./components/NewArrivals/NewArrivalsSection";

export const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <DeliveryStatements variant="pink" />
      <ProductShowcase />
      <CategoryIcons variant="yellow" />
      <NewArrivalsSection />
      <Banner />
    </div>
  );
};

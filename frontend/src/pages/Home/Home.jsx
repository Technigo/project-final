import { Banner } from "./components/Banner/Banner";
import { ProductCategories } from "./components/ProductCategories/ProductCategories";
import { CategoryIcons } from "../../common/ReusableComponents/CategoryIcons/CategoryIcons";
import { Hero } from "./components/Hero/Hero";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import "./Home.css";
import { DeliveryStatements } from "./components/DeliveryStatements/DeliveryStatements";

export const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <DeliveryStatements bgColor="#f38d7c" fontSize="24px" />
      <ProductShowcase />
      <CategoryIcons />
      <ProductCategories />
      <Banner />
    </div>
  );
};

/* 
Nav
Hero
Trust indicator
Products
Category-buttons
Categories
Banner */

import { Footer } from "../../sections/Footer/Footer";
import { Header } from "../../sections/Header/Header";
import { Banner } from "../../sections/Banner/Banner";
import { ProductCategories } from "../../sections/ProductCategories/ProductCategories";
import { CategoryIcons } from "../../components/CategoryIcons/CategoryIcons";
import { Hero } from "../../sections/Hero/Hero";
import { ProductShowcase } from "../../sections/ProductShowcase/ProductShowcase";
import "./Home.css";

export const Home = () => {
  return (
    <div className="homepage">
      <Hero />
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

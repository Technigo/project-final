import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Banner } from "../../sections/Banner/Banner";
import { ProductCategories } from "../../sections/ProductCategories/ProductCategories";
import { CategoryIcons } from "../../components/CategoryIcons/CategoryIcons";
import { Hero } from "../../sections/Hero/Hero";
import { ProductShowcase } from "../../sections/ProductShowcase/ProductShowcase";
import "./Home.css";

export const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <ProductShowcase />
      <CategoryIcons />
      <ProductCategories />
      <Banner />
      <Footer />
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

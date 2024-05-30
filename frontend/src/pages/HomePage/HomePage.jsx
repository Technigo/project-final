import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Banner } from "../../sections/Banner/Banner";
import { Categories } from "../../sections/Categories/Categories";
import { CategoryIcons } from "../../sections/CategoryIcons/CategoryIcons";
import { Hero } from "../../sections/Hero/Hero";
import { ProductShowcase } from "../../sections/ProductShowcase/ProductShowcase";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <ProductShowcase />
      <CategoryIcons />
      <Categories />
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

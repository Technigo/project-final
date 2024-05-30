import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Header/Nav";
import { Banner } from "../../sections/Banner/Banner";
import { Categories } from "../../sections/Categories/Categories";
import { CategoryIcons } from "../../sections/CategoryIcons/CategoryIcons";
import { Hero } from "../../sections/Hero/Hero";
import { ProductShowcase } from "../../sections/ProductShowcase/ProductShowcase";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Nav />
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

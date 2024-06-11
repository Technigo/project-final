import { Carousel } from "../components/Carousel";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ShoppingCartPopup } from "../components/ShoppingCartPopup"
import { ReviewCard } from "../components/ReviewCard";
import { Statements } from "../components/Statements";

export const Home = ({ data }) => {
  return (
    <>
      <main className="flex flex-col bg-main-red">
      < ShoppingCartPopup />
        <Hero data={data["hero"]} />
        <Carousel />
        <Statements data={data["atGlim"]} />
      </main>
      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer data={data["footer"]} aboveColor={"yellow"} />
    </>
  );
};

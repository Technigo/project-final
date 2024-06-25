import { PageHeader } from "../components/PageHeader";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Footer } from "../components/Footer";
import { Weather } from "../components/Weather";
import { AllParkSlides } from "../components/parkComponents/AllParkSlides";
import { HomePageFinland } from "../components/HomePageFinland";
import { HomePageSweden } from "../components/HomeParkSweden";

export const HomePage = () => {
  return (
    <>
      <PageHeader placeName={"Scandinavia"} />
      <HomePageFinland />
      <HomePageSweden />
      <div className="lg:relative md:relative">
        <AllParkSlides />
        <Weather
          city={"Helsinki"}
          timezone={"Europe/Helsinki"}
          className="lg:absolute md:absolute bottom-[100px] right-[0px]"
        />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

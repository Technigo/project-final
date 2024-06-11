import { HomePageText } from "../components/HomePageText";
import { PageHeader } from "../components/PageHeader";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Footer } from "../components/Footer";
import { Weather } from "../components/Weather";
import { AllParkSlides } from "../components/parkComponents/AllParkSlides";

export const HomePage = () => {
  return (
    <>
      <PageHeader placeName={"Scandinavian"} />
      <HomePageText
        textTitle={"Find your inner Finn in Nature | Explore Finland"}
        text={
          "The Helsinki Happiness hacks are your gateway to mastering your happiness and taking a step closer to find your inner Finn"
        }
        textImg={""}
        textImgAlt={""}
        linkTo={"/finland"}
        btnName={"Visit Finland"}
        titleStyle={""}
      />
      <HomePageText
        textTitle={"Experience the season | Explore Sweden"}
        text={"See the magnificant season change through the eyes of reindeer"}
        textImg={""}
        textImgAlt={""}
        linkTo={"/sweden"}
        btnName={"Visit Sweden"}
      />
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

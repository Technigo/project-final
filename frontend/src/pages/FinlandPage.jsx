import { PageHeader } from "../components/PageHeader";
import { ParkSlides } from "../components/parkComponents/ParkSlides";
import { Weather } from "../components/Weather";
import { CountryIntro } from "../components/CountryIntro";
import { MidBanner } from "../components/MidBanner";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";

export const FinlandPage = () => {
  return (
    <>
      <PageHeader placeName={"Finland"} />
      <CountryIntro
        topic={"Get close to nature"}
        text={
          "The best place to relax your senses and enjoy the beautiful and pristine Finnish nature is the National Parks. There are 41 nature reserves in Finland - all of them are free to enter and open year-round with marked trails.A visit to any of the parks is sure to grow your love of the great outdoors even more. Learn more about National Parks in different regions below and search for the one nearest to your travel destination."
        }
        countryIntroImg={""}
        countryIntroImgAlt={""}
      />
      <MidBanner
        MidBannerText={
          "There are 41 National Parks in Finland. The first ones - Pallas-Ounastunturi and Pyhä - were founded in 1938."
        }
      />
      <ParkSlides nation={"finland"} />
      <div className="lg:relative md:relative">
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

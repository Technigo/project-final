import { PageHeader } from "../components/PageHeader";
import { ParkSlides } from "../components/parkComponents/ParkSlides";
import { Weather } from "../components/Weather";
import { CountryIntro } from "../components/CountryIntro";
import { MidBanner } from "../components/MidBanner";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Line } from "../components/iconFolder/Line"

export const FinlandPage = () => {
  return (
    <>
      <PageHeader placeName={"Finland"} />
      <div className="mt-[80px] px-[25px]">
        <Line />
        <CountryIntro
          topic={"Get close to nature"}
          text={
            "The best place to relax your senses and enjoy the beautiful and pristine Finnish nature is the National Parks. There are 41 nature reserves in Finland - all of them are free to enter and open year-round with marked trails.A visit to any of the parks is sure to grow your love of the great outdoors even more. Learn more about National Parks in different regions below and search for the one nearest to your travel destination."
          }
          countryIntroImg={"/backgroundImages/finland-page.jpg"}
          countryIntroImgAlt={"findland-page-image"}
          
        />
      </div>
      <MidBanner
        MidBannerText={
          "Luonto tikanpojan puuhun ajaa. - There are certain laws in nature that are bound to happen or dont worry about it, it'll happen naturally."
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

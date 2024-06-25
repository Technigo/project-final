import { Weather } from "../components/Weather";
import { ParkSlides } from "../components/parkComponents/ParkSlides";
import { PageHeader } from "../components/PageHeader";
import { CountryIntro } from "../components/CountryIntro";
import { MidBannerSweden } from "../components/MidBannerSweden";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Footer } from "../components/Footer";
import { Line } from "../components/iconFolder/Line";

export const SwedenPage = () => {
  return (
    <>
      <PageHeader placeName={"Sweden"} />
      <div className="mt-[80px] px-[25px]">
        <Line />
        <CountryIntro
          topic={"Get close to nature"}
          text={
            "The best place to unwind and soak in the beauty of Sweden's pristine nature is its National Parks. Sweden has 30 National Parks, all free to enter and open year-round with well-marked trails. A visit to any of these parks is guaranteed to deepen your appreciation for the great outdoors. Explore the National Parks in different regions below and find the perfect one closest to your travel plans!"
          }
          countryIntroImg={"/backgroundImages/sweden-page.jpg"}
          countryIntroImgAlt={""}
        />
      </div>
      <MidBannerSweden
        MidBannerText={
          "“There is something of the freshness of mind, of the lightness of spirit in Linne which for centuries has been linked in people’s minds with the mountains of Sweden and Swedish joy in nature.” – Johannes Vilhelm Jensen"
        }
      />
      <ParkSlides nation={"sweden"} />
      <div className="lg:relative md:relative">
        <Weather
          city={"Stockholm"}
          timezone={"Europe/Stockholm"}
          className="lg:absolute md:absolute bottom-[100px] right-[0px]"
        />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

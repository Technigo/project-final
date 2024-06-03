import { HomePageText } from "../components/HomePageText";
import { PageHeader } from "../components/PageHeader";
import {ScrollToTop} from "../components/buttons/ToTopBtn"
import {Footer} from "../components/Footer"

export const HomePage = () => {
  return (
    <>
      <PageHeader placeName={"Scandinavian"} />
      <HomePageText textTitle={"Find your inner Finn in Nature | Explore Finland"} text={"The Helsinki Happiness hacks are your gateway to mastering your happiness and taking a step closer to find your inner Finn"} textImg={""} textImgAlt={""} linkTo={"/finland"} btnName={"Visit Finland"}/>
      <HomePageText textTitle={"Experience the season | Explore Sweden"} text={"See the magnificant season change through the eyes of reindeer"} textImg={""} textImgAlt={""} linkTo={"/sweden"} btnName={"Visit Sweden"}/>
      <ScrollToTop />
        <Footer />
    </>
  );
};

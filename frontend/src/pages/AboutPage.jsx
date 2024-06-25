import { DevCard } from "../components/DevCard";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { NavBarNoHover } from "../components/NavBarNoHover";
import { Line } from "../components/iconFolder/Line";
import { useAuthData } from "../contexts/AuthContext";
import {NavBarLogedIn} from "../components/NavBarLogedIn"

export const AboutPage = () => {

  const {user} = useAuthData()

  return (
    <>
      {user ? <NavBarLogedIn /> : <NavBarNoHover />}
      <div className="relative">
        <img
          src="/backgroundImages/hero-aboutus.jpg"
          alt="hero-about-us"
          className="md:h-[580px] w-[100%]"
        />
        <div className="absolute top-1/4 md:ml-[50px] sm:ml-[10px]">
          <h2 className="lg:text-h1lg md:text-h1md sm:text-h1sm font-avenir text-cardBg font-semibold">
            Hello👋
            <br />
            It's Trista and Yia
          </h2>
          <p className="mt-[20px] sm:mt-[10px] font-avenir font-semibold text-cardBg lg:text-textlg md:text-textmd sm:text-textsm">
            We are two web developers graduated from Technigo Bootcamp. <br />
            This is our final project where we put everything we have learned
            into reality.
          </p>
        </div>
      </div>
      <div className="mt-[90px] md:ml-[70px] md:mb-[50px] sm:w-[390px] sm:ml-[20px] flex flex-col">
        <div className="shrink-0">
          <Line />
          <h2 className="lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir mr-[20px]">
            About us
          </h2>
        </div>
        <p className="font-avenir lg:text-textlg md:text-textmd sm:text-textsm md:w-[1000px] sm:w-[300px] mb-[50px]">
          We both have studied and worked in Sweden and Finland for almost five
          years. Coming from similar cultural background, we found many
          similarities in our Nordic journey. But one thing we both agree is the
          beauty of Nordic nature.
          <br />
          The website is inspired by
          <a
            href="https://www.visitfinland.com/en/"
            className="text-bg2 font-semibold"
          >
            {" "}
            Visit Finland
          </a>{" "}
          and all photos are from real images from the parks. We keep all the
          photo credits here. Thank you all for visiting and we hope you find
          your next destination here.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/backgroundImages/default-image.jpg"
          alt="default-image"
          className="md:w-[840px] h-auto object-cover sm:w-[300px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center my-[30px] md:py-[40px]">
        <DevCard
          devImage={"/developerImages/yia.png"}
          devName={"Yia"}
          developerName={"Yia Tsai"}
          devIntro={
            "💻 Frontend Developer with the background in Marketing & SEO. Started the coding journey to become an unicorn that master all three areas. I am still on that long journey but having fun with it! \n 📍 Based in Malmö, Sweden. "
          }
          gitLink={"https://github.com/Citronskal"}
          linkedinLink={"https://www.linkedin.com/in/yiatsai33/"}
          portfolioLink={"https://yia-porfolio.netlify.app/"}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-[30px] md:py-[40px]">
        <DevCard
          devImage={"/developerImages/trista.jpg"}
          devName={"Trista"}
          developerName={"Trista Shan"}
          devIntro={
            "💻 Web Developer with a healthcare background, driven by a passion for overcoming challenges and appreciating the beauty of nature's colorful creations. \n 📍 Based in Helsinki, Finland"
          }
          gitLink={"https://github.com/tristashan"}
          linkedinLink={"https://www.linkedin.com/in/trista-shan-62074471/"}
          portfolioLink={"https://trista-portfolio.netlify.app/"}
        />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

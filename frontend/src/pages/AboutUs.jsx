import { Footer } from "../components/Footer";
import linda from "/profilePictures/linda.jpg";
import izabel from "/profilePictures/izabel.jpg";
import martin from "/profilePictures/martin.jpg";

export const AboutUs = () => {
  return (
    <>
      <div className="text-text-light w-3/4 tablet:max-w-screen-tablet m-auto">
        <h2 className="font-heading text-2xl text-center my-8">The idea</h2>
        <p className="font-body text-center">
          glim started with the idea that personalized products should be easier
          to find. By entering your information in your profile you get
          recommendations, allergy alerts and products that you know work with
          you, not against you.
        </p>
        <h2 className="font-heading text-2xl text-center my-8">About us</h2>
        <p className="font-body text-center">
          We are the ones that made this crazy website. It was made as a final
          project for the Technigo bootcamp.
        </p>
        <div className="flex m-10 justify-around">
          <div>
            <img
              src={linda}
              alt="Backend Extraordinair"
              className="w-20 rounded-full border-2 border-main-yellow"
            />
            <h3 className="font-heading text-center text-xl my-2">Linda</h3>
            <div className="flex flex-col text-center">
              <a className="hover:opacity-75 active:opacity-50
               my-2" href="https://www.linkedin.com/in/lindafrischknecht/">
                Contact me
              </a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://linda-f-project-portfolio.netlify.app/">
                Portfolio
              </a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://github.com/linda-f">GitHub</a>
            </div>
          </div>
          <div>
            <img
              src={izabel}
              alt="Designer Extraordinair"
              className="w-20 rounded-full border-2 border-main-yellow"
            />
            <h3 className="font-heading text-center text-xl my-2">Izabel</h3>
            <div className="flex flex-col text-center">
              <a className="hover:opacity-75 active:opacity-50
               my-2" href="https://www.linkedin.com/in/izabel-lind-f%C3%A4rnstrand-6336071a2/">
                Contact me
              </a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://izabellindfarnstrand.netlify.app/">Portfolio</a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://github.com/Izzibizz">GitHub</a>
            </div>
          </div>
          <div>
            <img
              src={martin}
              alt="Jack of all trades"
              className="w-20 rounded-full border-2 border-main-yellow"
            />
            <h3 className="font-heading text-center text-xl my-2">Martin</h3>
            <div className="flex flex-col text-center">
              <a className="hover:opacity-75 active:opacity-50
               my-2" href="https://www.linkedin.com/in/martin-j%C3%B6nsson-058064163/">
                Contact me
              </a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://martin-joensson-portfolio.netlify.app/">
                Portfolio
              </a>
              <a className="hover:opacity-75 active:opacity-50
              " href="https://github.com/Martin-Joensson">GitHub</a>
            </div>
          </div>
        </div>
        {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      </div>
      <Footer aboveColor={"red"} />
    </>
  );
};

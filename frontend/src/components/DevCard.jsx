import { Github } from "./iconFolder/Github";
import { Linkedin } from "./iconFolder/Linkedin";
import { Portfolio } from "./iconFolder/Portfolio";

export const DevCard = ({
  devImage,
  devName,
  developerName,
  devIntro,
  gitLink,
  linkedinLink,
  portfolioLink,
}) => {
  return (
    <div className="flex md:flex-row flex-col items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0 w-full max-w-3xl">
      <img
        src={devImage}
        alt={devName}
        className="md:w-[300px] md:h-[300px] sm:w-[150px] sm:h-[150px] object-cover rounded-full flex-none"
      />
      <div className="flex-1 md:ml-[60px] w-full">
        <h4 className="lg:text-logoLg md:text-logoMd sm:text-logoSm font-semibold text-fontColor font-avenir text-center md:text-left">
          {developerName}
        </h4>
        <p className="lg:text-textlg md:text-textmd sm:text-textsm font-normal text-fontColor w-full">
          {devIntro.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-2 ">
          <a href={gitLink} className="text-fontColor hover:text-bg2">
            <Github />
          </a>
          <a href={linkedinLink} className="text-fontColor hover:text-bg2">
            <Linkedin />
          </a>
          <a href={portfolioLink} className="text-fontColor hover:text-bg2">
            <Portfolio />
          </a>
        </div>
      </div>
    </div>
  );
};

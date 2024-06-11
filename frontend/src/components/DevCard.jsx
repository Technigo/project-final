import {Github} from "./iconFolder/Github"
import {Linkedin} from "./iconFolder/Linkedin"
import {Portfolio} from "./iconFolder/Portfolio"

export const DevCard = ({ devImage, devName, developerName, devIntro, gitLink, linkedinLink, portfolioLink}) => {
  return (
    <>
      <div>
        <img src={devImage} alt={devName} />
      </div>
      <div>
        <h4>{developerName}</h4>
        <p>{devIntro}</p>
      </div>
      <div>
      <a href={gitLink}><Github /></a>
      <a href={linkedinLink}><Linkedin /></a>
      <a href={portfolioLink}><Portfolio/></a>
      </div>
    </>
  );
};

import PropTypes from "prop-types";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import emailIcon from "../assets/email-icon.svg";

export const ProfileCard = ({
  image,
  name,
  role,
  githubUrl,
  linkedinUrl,
  email,
}) => {
  return (
    <div className="py-10 px-4 flex flex-col items-center">
      <img src={image} alt="profile of the our member" className="pb-4" />
      <p className="pb-2 font-montserrat text-xl font-bold">
        {name}
      </p>
      <p className="text-md pb-4 font-montserrat font-bold text-light-blue">
        {role}
      </p>
      <div className="flex flex-row items-center">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} className="px-2" alt="github icon" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} className="px-2" alt="linkedIn icon" />
        </a>
        <a href={`mailto:${email}`}>
          <img src={emailIcon} className="px-2" alt="email icon" />
        </a>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

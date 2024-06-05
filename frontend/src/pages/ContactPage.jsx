import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

import { ToHomepageBtn } from "../components/ToHomepageBtn";
import StyledContactPage from "../components/styled/ContactPage.styled";

export const ContactPage = () => {
  return (
    <>
      <StyledContactPage>
        <ToHomepageBtn />

        <h3>Curious about the developers behind MuSeek?</h3>

        <p>Get in touch with us!</p>

        <h4>Etna Zuñiga</h4>
        <FaLinkedin />
        <FaGithub />
        <FaGlobe />

        <h4>Alma Herrström </h4>
        <FaLinkedin />
        <FaGithub />
        <FaGlobe />
      </StyledContactPage>
    </>
  );
};

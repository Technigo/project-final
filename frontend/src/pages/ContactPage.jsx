import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"

import { ToHomepageBtn } from "../components/ToHomepageBtn"

export const ContactPage = () => {
  return (
    <div>
      <ToHomepageBtn />

      <h3>Curious about the developers behind MuSeek?</h3>

      <p>Get in touch with us!</p>

      <h4>Etna</h4>
      <FaLinkedin />
      <FaGithub />
      <FaGlobe />

      <h4>Alma</h4>
      <FaLinkedin />
      <FaGithub />
      <FaGlobe />
    </div>
  )
}

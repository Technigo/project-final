import styled from "styled-components"
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"
import EtnaImage from "/etna.jpeg"
import AlmaImage from "/alma.png"

export const ContactPage = () => {
  return (
    <>
      <StyledContactPage>
        <h3>Meet the developers behind MuSeek</h3>

        <p>Connect with us to learn more about our journey!</p>

        <DeveloperInfo>
          <DeveloperImage src={EtnaImage} alt="Etna Zuñiga" />
          <div>
            <h4>Etna Zuñiga</h4>
            <p>
              Former procurement professional turned web developer with a blend
              of analytical skills and attention to detail.
            </p>
            <SocialLinks>
              <a
                href="https://www.linkedin.com/in/rosa-etna-zu%C3%B1iga-ruiz-a889818a/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Caracal23"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://grand-otter-76db0c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </SocialLinks>
          </div>
        </DeveloperInfo>

        <DeveloperInfo>
          <DeveloperImage src={AlmaImage} alt="Alma Herrström" />
          <div>
            <h4>Alma Herrström</h4>
            <p>
              Seasoned financial auditor transitioning into web development with
              a passion for problem-solving and optimization.
            </p>
            <SocialLinks>
              <a
                href="https://www.linkedin.com/in/almaherrstrom/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/almaherris"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://almaherrstrom.netlify.app/"
                target="_blank"
                rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </SocialLinks>
          </div>
        </DeveloperInfo>
      </StyledContactPage>
    </>
  )
}

const StyledContactPage = styled.div`
  background-color: #f5f5f5;
  padding: 80px 20px 20px 20px;
  text-align: center;

  h3 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
  }
`

const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    text-align: left;
  }
`

const DeveloperImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin-right: 10px;
    font-size: 24px;
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`

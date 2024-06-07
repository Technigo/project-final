import { ToHomepageBtn } from "../components/ToHomepageBtn"
//import StyledAboutPage from "../components/styled/AboutPage.styled";
import styled from "styled-components"

export const AboutPage = () => {
  return (
    <StyledAboutPage>
      <ToHomepageBtn />
      <Content>
        <h3>About MuSeek</h3>
        <p>
          Welcome to MuSeek, your portal to discovering hidden treasures in the
          world of museums. Developed by Alma and Etna as our final project at
          the Technigo web development bootcamp, MuSeek is a unique webpage
          crafted for the curious traveler and cultural enthusiast.
        </p>

        <p>
          With MuSeek, explore lesser-known museums from around the globe,
          offering an authentic alternative to mainstream tourist attractions.
          Powered by React, Node.js, and styled components, our platform ensures
          a seamless and visually engaging experience as you embark on a journey
          to uncover captivating cultural wonders.
        </p>

        <p>
          Whether you seek off-the-beaten-path destinations or simply crave a
          new perspective, MuSeek is your trusted companion for enriching museum
          exploration.
        </p>
      </Content>
    </StyledAboutPage>
  )
}

const PageWrapper = styled.div`
  background-color: #222; /* Dark background */
  color: #fff; /* White text */
  min-height: 100vh;
  padding: 20px;
`

const StyledAboutPage = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #007bff;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 25px;
    color: #333;
  }
`

import { ToHomepageBtn } from "../components/ToHomepageBtn";
import StyledAboutPage from "../components/styled/AboutPage.styled";

//To rewrite this section with our own words, this it too "chatgpt"

export const AboutPage = () => {
  return (
    <StyledAboutPage>
      <ToHomepageBtn />
      <h3>About MuSeek</h3>
      <p>
        Welcome to MuSeek, your portal to discovering hidden treasures in the
        world of museums. Developed by Alma and Etna as our final project at the
        Technigo web development bootcamp, MuSeek is a unique webpage crafted
        for the curious traveler and cultural enthusiast.
      </p>

      <p>
        With MuSeek, explore lesser-known museums from around the globe,
        offering an authentic alternative to mainstream tourist attractions.
        Powered by React, Node.js, and styled components, our platform ensures a
        seamless and visually engaging experience as you embark on a journey to
        uncover captivating cultural wonders.
      </p>

      <p>
        Whether you seek off-the-beaten-path destinations or simply crave a new
        perspective, MuSeek is your trusted companion for enriching museum
        exploration.
      </p>
    </StyledAboutPage>
  );
};

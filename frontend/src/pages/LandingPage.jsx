import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MuseumCardContainer } from "../components/MuseumCardContainer";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import museumList from "../json/museums.json";
import { Newsletter } from "../components/Newsletter";
import styled from "styled-components";

const LandinPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LandingPage = () => {
  const [results, setResults] = useState([]);

  return (
    <LandinPageContainer>
      <NavBar />
      <HeroSection />
      <SearchBar setResults={setResults} />
      <MuseumCardContainer
        results={results.length === 0 ? museumList : results}
      />
      <Newsletter />
      <Footer />
    </LandinPageContainer>
  );
};

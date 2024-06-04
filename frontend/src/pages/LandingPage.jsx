import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MuseumCardContainer } from "../components/MuseumCardContainer";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import museumList from "../json/museums.json";
import StyledButton from "../components/styled/Button.styled";
import { Newsletter } from "../components/Newsletter";

export const LandingPage = () => {
  const [results, setResults] = useState([]);

  const PaddedContent = styled.div`
    padding: 0px 10px;
  `;

  return (
    <>
      <NavBar />
      <HeroSection />
      <PaddedContent>
        <SearchBar setResults={setResults} />
        <StyledButton onClick={() => setResults([])}>Clear</StyledButton>
        <MuseumCardContainer
          results={results.length === 0 ? museumList : results}
        />
      </PaddedContent>
      <Newsletter />
      <Footer />
    </>
  );
};

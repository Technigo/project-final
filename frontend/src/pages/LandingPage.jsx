import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultList } from "../components/SearchResultList";
import { MuseumCardContainer } from "../components/MuseumCardContainer";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import styled from "styled-components";

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
        <SearchResultList museumList={results} />
        <MuseumCardContainer />
      </PaddedContent>
      <Footer />
    </>
  );
};

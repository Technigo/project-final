import styled from "styled-components";
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MuseumCardContainer } from "../components/MuseumCardContainer";
import { HeroSection } from "../components/HeroSection";
import { Newsletter } from "../components/Newsletter";
import { MuseumMap } from "../components/MuseumMap";

export const LandingPage = () => {
  const [museums, setMuseums] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch(
          "https://museek-2ejb.onrender.com/museums"
        );
        if (!response.ok) {
          throw new Error("Error fetching museums");
        }
        const data = await response.json();
        setMuseums(data);
      } catch (error) {
        console.error("There was en error fetching data:", error);
      }
    };

    fetchMuseums();
  }, []);

  const museumsToShow = results.length === 0 ? museums : results;

  return (
    <div>
      <LandingPageContainer>
        <HeroSection />
        <SearchBar setResults={setResults} />
        <MuseumCardContainer results={museumsToShow} />
        <MuseumMap
          museums={museumsToShow}
          showLink={true}
          center={[48.8566, 2.3522]}
        />
        <Newsletter />
      </LandingPageContainer>
    </div>
  );
};

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

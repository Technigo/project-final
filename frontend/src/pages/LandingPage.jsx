import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultList } from "../components/SearchResultList";
import { MuseumCardContainer } from "../components/MuseumCardContainer";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <SearchBar setResults={setResults} />
      <SearchResultList museumList={results} />
      <MuseumCardContainer />
      <Footer />
    </div>
  );
};

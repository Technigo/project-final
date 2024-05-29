import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import { MuseumCardContainer } from "./MuseumCardContainer";
import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
import { Footer } from "./Footer";

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

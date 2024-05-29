import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";

export const LandingPage = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResultList museumList={results}/>
    </div>
  );
};

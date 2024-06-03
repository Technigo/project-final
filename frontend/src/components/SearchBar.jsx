import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import museumList from "../json/museums.json";
import StyledSearchBar from "./styled/SearchBar.styled";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  const search = (e) => {
    e.preventDefault();
    const results = museumList.filter((museum) => {
      const searchInput = input.toLowerCase();

      return (
        museum.name.toLowerCase().includes(searchInput) ||
        museum.location.toLowerCase().includes(searchInput) ||
        museum.theme.toLowerCase().includes(searchInput)
      );
    });
    console.log(results);
    setResults(results);
    setInput("");
  };

  return (
    <>
      <form onSubmit={search}>
        <FaSearch />
        <StyledSearchBar
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

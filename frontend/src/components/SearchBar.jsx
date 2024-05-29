import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import museumList from "../json/museums.json";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  const search = () => {
    const results = museumList.filter((museum) => {
      return museum.name.toLowerCase().includes(input.toLowerCase());
    });
    console.log(results);
    setResults(results);
  };

  return (
    <>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit" onClick={search}>
          Search
        </button>
      </div>
    </>
  );
};

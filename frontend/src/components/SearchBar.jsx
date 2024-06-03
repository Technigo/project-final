import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import museumList from "../json/museums.json";
import StyledSearchBar from "./styled/SearchBar.styled";
import StyledButton from "./styled/Button.styled";
import { AlertMessage } from "./AlertMessage";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (value) => {
    setInput(value);
    setShowErrorMessage(false);
  };

  const search = (e) => {
    e.preventDefault();
    if (input === "") {
      setShowErrorMessage(true);
    } else {
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
    }
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
        <StyledButton type="submit">Search</StyledButton>
        {showErrorMessage === true && (
          <AlertMessage type="text" message="Search field cannot be empty" />
        )}
      </form>
    </>
  );
};

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import museumList from "../json/museums.json";
import StyledSearchBar from "./styled/SearchBar.styled";
import StyledButton from "./styled/Button.styled";
import { AlertMessage } from "./AlertMessage";
import styled from "styled-components";

const SearchBarContainer = styled.form`
  display: flex;
  margin: 20px auto;
  align-items: center;

  button {
    margin: 0 5px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  height: 100%;

  margin-right: 10px;

  svg {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    color: grey;
  }
`;

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
    <SearchBarContainer onSubmit={search}>
      <InputWrapper>
        <FaSearch />
        <StyledSearchBar
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </InputWrapper>
      <StyledButton type="submit">Search</StyledButton>
      <StyledButton onClick={() => setResults([])}>Clear</StyledButton>
      {showErrorMessage === true && (
        <AlertMessage type="text" message="Search field cannot be empty" />
      )}
    </SearchBarContainer>
  );
};

import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import museumList from "../../../backend/data/museums.json"
import { AlertMessage } from "./AlertMessage"
import StyledButton from "./styled/Button.styled"
//import StyledSearchBar from "./styled/SearchBar.styled"

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleChange = (value) => {
    setInput(value)
    setShowErrorMessage(false)
  }

  const search = (e) => {
    e.preventDefault()
    if (input === "") {
      setShowErrorMessage(true)
    } else {
      const results = museumList.filter((museum) => {
        const searchInput = input.toLowerCase()

        return (
          museum.name.toLowerCase().includes(searchInput) ||
          museum.location.toLowerCase().includes(searchInput) ||
          museum.theme.toLowerCase().includes(searchInput)
        )
      })
      console.log(results)
      setResults(results)
      setInput("")
    }
  }

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
      <ButtonWrapper>
        <StyledButton type="submit">Search</StyledButton>
        <StyledButton onClick={() => setResults([])}>Clear</StyledButton>
      </ButtonWrapper>
      {showErrorMessage === true && (
        <AlertMessage type="text" message="Search field cannot be empty" />
      )}
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.form`
  padding: 50px 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  button {
    margin: 0 5px;
  }
`

const StyledSearchBar = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  height: 10px;
  width: 250px;
  outline: 0;
  background-color: #f5f5f5;
  font-size: 16px;
  padding: 14px;
`

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
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`

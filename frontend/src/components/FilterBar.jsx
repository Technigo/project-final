import { useState } from "react"
import Select from "react-select"
import styled from "styled-components"
import StyledButton from "../components/styled/Button.styled"

export const FilterBar = ({ setFilters }) => {
  const [country, setCountry] = useState("")
  const [category, setCategory] = useState("")
  const [hasCafe, setHasCafe] = useState(false)
  const [ticketPriceFree, setTicketPriceFree] = useState(false)

  const handleFilterChange = () => {
    setFilters({ country, category, hasCafe, ticketPriceFree })
  }

  const handleClearFilters = () => {
    setCountry("")
    setCategory("")
    setHasCafe(false)
    setTicketPriceFree(false)
    setFilters({
      country: "",
      category: "",
      hasCafe: false,
      ticketPriceFree: false,
    })
  }

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "France", label: "France" },
    { value: "Belgium", label: "Belgium" },
    { value: "Ireland", label: "Ireland" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Norway", label: "Norway" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Germany", label: "Germany" },
    { value: "Iceland", label: "Iceland" },
    { value: "Croatia", label: "Croatia" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "Sweden", label: "Sweden" },
    { value: "Russia", label: "Russia" },
    { value: "Spain", label: "Spain" },
    { value: "Denmark", label: "Denmark" },
    { value: "Estonia", label: "Estonia" },
    { value: "Portugal", label: "Portugal" },
    { value: "England", label: "England" },
    { value: "Turkey", label: "Turkey" },
    { value: "India", label: "India" },
    { value: "Thailand", label: "Thailand" },
    { value: "Japan", label: "Japan" },
    { value: "South Korea", label: "South Korea" },
    { value: "Macao", label: "Macao" },
    { value: "China", label: "China" },
    { value: "United States", label: "United States" },
    { value: "Mexico", label: "Mexico" },
    { value: "Canada", label: "Canada" },
    { value: "Peru", label: "Peru" },
    { value: "Colombia", label: "Colombia" },
    { value: "Chile", label: "Chile" },
    { value: "Argentina", label: "Argentina" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Egypt", label: "Egypt" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "South Africa", label: "South Africa" },
    { value: "Benin", label: "Benin" },
    { value: "Australia", label: "Australia" },
    { value: "New Zealand", label: "New Zealand" },
  ]

  // Define options array for each category
  const categoryOptions = [
    { value: "", label: "Select Category" },
    { value: "Art movements", label: "Art movements" },
    { value: "Literature and History", label: "Literature and History" },
    { value: "Human and social themes", label: "Human and social themes" },
    { value: "Cultural Symbols", label: "Cultural Symbols" },
    { value: "Miscellaneous", label: "Miscellaneous" },
    { value: "Food and Beverages", label: "Food and Beverages" },
    {
      value: "Artistic Techniques and Forms",
      label: "Artistic Techniques and Forms",
    },
    { value: "Unique Collections", label: "Unique Collections" },
    { value: "Nature and Science", label: "Nature and Science" },
  ]

  return (
    <FilterBarContainer>
      <SelectContainer>
        <StyledSelect
          options={countryOptions}
          value={{ value: country, label: country || "Select Country" }}
          onChange={(selectedOption) => setCountry(selectedOption.value)}
          placeholder="Select Country"
          isSearchable
        />

        <StyledSelect
          options={categoryOptions}
          value={{ value: category, label: category || "Select Category" }}
          onChange={(selectedOption) => setCategory(selectedOption.value)}
          placeholder="Select Category"
          isSearchable
        />

        <CheckboxContainer>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={hasCafe}
              onChange={(e) => setHasCafe(e.target.checked)}
            />
            Has Cafe
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={ticketPriceFree}
              onChange={(e) => setTicketPriceFree(e.target.checked)}
            />
            Free Admission
          </CheckboxLabel>
        </CheckboxContainer>
        <ButtonContainer>
          <StyledButton onClick={handleFilterChange}>
            Apply filters
          </StyledButton>
          <StyledButton onClick={handleClearFilters}>
            Clear filters
          </StyledButton>
        </ButtonContainer>
      </SelectContainer>
    </FilterBarContainer>
  )
}

const FilterBarContainer = styled.div`
  padding: 80px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222222;
`

const SelectContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const StyledSelect = styled(Select)`
  .react-select__control {
    border-color: #ccc;
  }

  .react-select__control:hover {
    border-color: #888;
  }

  .react-select__menu {
    z-index: 10;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
`

const Checkbox = styled.input`
  margin-right: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px 0;
`

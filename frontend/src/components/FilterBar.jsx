import { useState } from "react"
import Select from "react-select"
import styled from "styled-components"
import { StyledButton } from "../components/styled/Button.styled"

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

  // Define options array for each country and category
  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "Argentina", label: "Argentina" },
    { value: "Australia", label: "Australia" },
    { value: "Belgium", label: "Belgium" },
    { value: "Benin", label: "Benin" },
    { value: "Canada", label: "Canada" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Colombia", label: "Colombia" },
    { value: "Croatia", label: "Croatia" },
    { value: "Denmark", label: "Denmark" },
    { value: "Egypt", label: "Egypt" },
    { value: "England", label: "England" },
    { value: "Estonia", label: "Estonia" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Ireland", label: "Ireland" },
    { value: "Japan", label: "Japan" },
    { value: "Macao", label: "Macao" },
    { value: "Mexico", label: "Mexico" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Norway", label: "Norway" },
    { value: "Peru", label: "Peru" },
    { value: "Portugal", label: "Portugal" },
    { value: "Russia", label: "Russia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Korea", label: "South Korea" },
    { value: "Spain", label: "Spain" },
    { value: "Sweden", label: "Sweden" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Turkey", label: "Turkey" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
  ]

  const categoryOptions = [
    { value: "", label: "Select Category" },
    { value: "Art movements", label: "Art movements" },
    {
      value: "Artistic Techniques and Forms",
      label: "Artistic Techniques and Forms",
    },
    { value: "Cultural Symbols", label: "Cultural Symbols" },
    { value: "Food and Beverages", label: "Food and Beverages" },
    { value: "Human and social themes", label: "Human and social themes" },
    { value: "Literature and History", label: "Literature and History" },
    { value: "Miscellaneous", label: "Miscellaneous" },
    { value: "Nature and Science", label: "Nature and Science" },
    { value: "Unique Collections", label: "Unique Collections" },
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
            Restaurant on premises{" "}
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

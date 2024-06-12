import { useState } from "react"
import Select from "react-select"

export const FilterBar = ({ setFilters }) => {
  const [country, setCountry] = useState("")
  const [theme, setTheme] = useState("")
  const [hasCafe, setHasCafe] = useState(false)
  const [ticketPriceFree, setTicketPriceFree] = useState(false)

  const handleFilterChange = () => {
    setFilters({ country, theme, hasCafe, ticketPriceFree })
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
    <div>
      <div>
        <Select
          options={countryOptions}
          value={{ value: country, label: country }}
          onChange={(selectedOption) => setCountry(selectedOption.value)}
          placeholder="Select Country"
          isSearchable
        />

        <Select
          options={categoryOptions}
          value={{ value: category, label: category }}
          onChange={(selectedOption) => setCategory(selectedOption.value)}
          placeholder="Select Category"
          isSearchable
        />

        <label>
          <input
            type="checkbox"
            checked={hasCafe}
            onChange={(e) => setHasCafe(e.target.checked)}
          />
          Has Cafe
        </label>

        <label>
          <input
            type="checkbox"
            checked={ticketPriceFree}
            onChange={(e) => setTicketPriceFree(e.target.checked)}
          />
          Free Admission
        </label>

        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
    </div>
  )
}

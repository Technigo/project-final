import { useEffect, useState } from "react"
import styled from "styled-components"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { FilterBar } from "../components/FilterBar"
import { StyledButton } from "../components/styled/Button.styled"
import { Background } from "../components/styled/Background.styled"
import { MuseumMap } from "../components/MuseumMap"

export const MuseumPage = () => {
  const [museums, setMuseums] = useState([])
  const [amountToShow, setAmountToShow] = useState(8)

  const [filters, setFilters] = useState({
    country: "",
    category: "",
    hasCafe: false,
    ticketPriceFree: false,
  })
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch("https://museek-2ejb.onrender.com/museums")
        if (!response.ok) {
          throw new Error("Error fetching museums")
        }
        const data = await response.json()
        setMuseums(data)
      } catch (error) {
        console.error("There was en error fetching data:", error)
      }
    }

    fetchMuseums()
  }, [])

  const filterMuseums = (museums) => {
    return museums.filter((museum) => {
      const matchesCountry = filters.country
        ? museum.location.toLowerCase().includes(filters.country.toLowerCase())
        : true
      const matchesCategory = filters.category
        ? museum.category === filters.category
        : true
      const matchesHasCafe = filters.hasCafe ? museum.has_cafe : true
      const matchesTicketPriceFree = filters.ticketPriceFree
        ? museum.ticket_price.toLowerCase() === "free"
        : true

      return (
        matchesCountry &&
        matchesCategory &&
        matchesHasCafe &&
        matchesTicketPriceFree
      )
    })
  }

  useEffect(() => {
    const checkNoResults = () => {
      const filteredMuseums = filterMuseums(museums)
      setNoResults(filteredMuseums.length === 0)
    }

    checkNoResults()
  }, [filters, museums])

  const showMore = () => setAmountToShow(amountToShow + 8)

  const museumsToShow = filterMuseums(museums)

  return (
    <MuseumPageContainer>
      <Background bgColor="#222222" />
      <FilterBar setFilters={setFilters} />
      {noResults ? (
        <NoResultsMessage>
          No results found for the selected filters.
        </NoResultsMessage>
      ) : (
        <>
          <MuseumCardContainer
            results={museumsToShow}
            amountToShow={amountToShow}
          />
          <ButtonContainer>
            {amountToShow < museumsToShow.length && (
              <StyledButton onClick={showMore}>Show more</StyledButton>
            )}
          </ButtonContainer>
        </>
      )}

      <MuseumMap
        museums={museumsToShow}
        showLink={true}
        center={[51.5074, -0.1278]}
      />
    </MuseumPageContainer>
  )
}

const MuseumPageContainer = styled.div`
  padding-top: 80px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #222222;
  padding: 50px 0;
`
const NoResultsMessage = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  padding-bottom: 100px;
`

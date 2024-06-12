import styled from "styled-components"
import { useEffect, useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { HeroSection } from "../components/HeroSection"
import { Newsletter } from "../components/Newsletter"
import { MuseumMap } from "../components/MuseumMap"
import StyledButton from "../components/styled/Button.styled"
import { Link } from "react-router-dom"

export const LandingPage = () => {
  const [museums, setMuseums] = useState([])
  const [results, setResults] = useState([])
  const [amountToShow, setAmountToShow] = useState(8)

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

  const museumsToShow = results.length === 0 ? museums : results

  return (
    <div>
      <LandingPageContainer>
        <Background />

        <HeroSection />
        <SearchBar setResults={setResults} />
        <MuseumCardContainer
          results={museumsToShow}
          amountToShow={amountToShow}
        />
        <ButtonContainer>
          {" "}
          <Link to="/museums">
            <StyledButton>Discover more...</StyledButton>
          </Link>
        </ButtonContainer>
        <MuseumMap
          museums={museumsToShow}
          showLink={true}
          center={[48.8566, 2.3522]}
        />
        <Newsletter />
      </LandingPageContainer>
    </div>
  )
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  z-index: -999;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #333333;
  padding: 50px 0;
`

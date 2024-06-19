import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SearchBar } from "../components/SearchBar"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { HeroSection } from "../components/HeroSection"
import { Newsletter } from "../components/Newsletter"
import { MuseumMap } from "../components/MuseumMap"
import { StyledButton } from "../components/styled/Button.styled"
import { Background } from "../components/styled/Background.styled"
import { CTA } from "../components/CTA"

export const LandingPage = () => {
  const [museums, setMuseums] = useState([])
  const [results, setResults] = useState([])
  const [amountToShow, setAmountToShow] = useState(8)
  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
      } catch (error) {
        console.error("There was an error fetching data:", error)
        setIsLoading(false)
      }
    }

    fetchMuseums()
  }, [])

  const museumsToShow = results.length === 0 ? museums : results

  return (
    <div>
      <LandingPageContainer>
        <Background bgColor="#222222" />

        <HeroSection />
        <CTA />
        <SearchBar setResults={setResults} />

        {isLoading ? (
          <LoadingContainer>
            Searching for museums worldwide...
          </LoadingContainer>
        ) : (
          <MuseumCardContainer
            results={museumsToShow}
            amountToShow={amountToShow}
          />
        )}

        <ButtonContainer>
          {" "}
          <Link to="/museums">
            <StyledButton aria-label="Discover more musuems">Discover more...</StyledButton>
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #222222;
  padding: 30px 0 50px 0;
`
const LoadingContainer = styled.div`
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  background-color: #222222;
  color: white;
`

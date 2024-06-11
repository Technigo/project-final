import styled from "styled-components"
import { useEffect, useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { Newsletter } from "../components/Newsletter"
import { MuseumMap } from "../components/MuseumMap"

export const LandingPage = () => {
  const [museums, setMuseums] = useState([])
  const [results, setResults] = useState([])

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
    <LandingPageContainer>
      <NavBar />
      <HeroSection />
      <SearchBar setResults={setResults} />
      <MuseumCardContainer results={museumsToShow} />
      <MuseumMap museums={museumsToShow} showLink={true} />
      <Newsletter />
    </LandingPageContainer>
  )
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

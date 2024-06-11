import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import mercuryCard from "../../assets/images/mercuryCard.png"
import venusCard from "../../assets/images/venusCard.png"
import tellusCard from "../../assets/images/tellusCard.png"
import marsCard from "../../assets/images/marsCard.png"
import jupiterCard from "../../assets/images/jupiterCard.png"
import saturnCard from "../../assets/images/saturnCard.png"
import uranusCard from "../../assets/images/uranusCard.png"
import neptuneCard from "../../assets/images/neptuneCard.png"
import plutoCard from "../../assets/images/plutoCard.png"

const PlanetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
`

const PlanetLink = styled(Link)`
  text-decoration: none;
`

const PlanetCard = styled.div`
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  &:hover {
    transform: scale(1.2);
    color: #cf4b14;
  }
`

const PlanetInfo = styled.p`
  font-family: var(--font-family-headlines);
  font-size: var(--font-size-h2-mob);
  color: var(--headline-color);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #cf4b14;
  }

  ${(props) =>
    props.isSaturn &&
    `
    margin-top: 80px; 
  `}
`

const PlanetImage = styled.img`
  width: 300px;
`

export const AllPlanets = () => {
  const URL = `https://project-final-45vw.onrender.com/planets`
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch planets, reload page and try again`)
        }
        const data = await response.json()
        setPlanets(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPlanets()
  }, [])

  if (loading) {
    return <div>Loading all planets...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (planets.length === 0) {
    return <div>No planet data available</div>
  }

  // Function to get the image source based on the planet name
  const getImageSrc = (planetName) => {
    switch (planetName.toLowerCase()) {
      case "sun":
        return sunCard
      case "mercury":
        return mercuryCard
      case "venus":
        return venusCard
      case "tellus":
        return tellusCard
      case "mars":
        return marsCard
      case "jupiter":
        return jupiterCard
      case "saturn":
        return saturnCard
      case "uranus":
        return uranusCard
      case "neptune":
        return neptuneCard
      case "pluto":
        return plutoCard
      case "moon":
        return moonCard
      default:
        return ""
    }
  }

  // Array to define the order of planets based on the switch statement
  const planetOrder = [
    "sun",
    "mercury",
    "venus",
    "tellus",
    "moon",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
  ]

  // Sort planets based on the planetOrder array
  const sortedPlanets = planets.sort(
    (a, b) =>
      planetOrder.indexOf(a.name.toLowerCase()) -
      planetOrder.indexOf(b.name.toLowerCase())
  )
  return (
    <PlanetsContainer>
      {sortedPlanets.map((planet) => (
        <PlanetLink
          key={planet.name}
          to={
            planet.name === "sun" || planet.name === "moon"
              ? `/${planet.name}`
              : `/planets/${planet.name.toLowerCase()}`
          }
        >
          <PlanetCard>
            <PlanetImage src={getImageSrc(planet.name)} alt={planet.name} />
            <PlanetInfo isSaturn={planet.name.toLowerCase() === "saturn"}>
              {planet.name.toUpperCase()}
            </PlanetInfo>
          </PlanetCard>
        </PlanetLink>
      ))}
    </PlanetsContainer>
  )
}

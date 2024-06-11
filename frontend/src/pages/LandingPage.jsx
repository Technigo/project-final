import styled from "styled-components"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SearchBar } from "../components/SearchBar"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { Newsletter } from "../components/Newsletter"

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

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  })

  return (
    <LandingPageContainer>
      <NavBar />
      <HeroSection />
      <SearchBar setResults={setResults} />
      <MuseumCardContainer results={museumsToShow} />
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {museumsToShow.map((museum) => (
          <Marker
            key={museum.id}
            position={[museum.lat, museum.lon]}
            icon={customIcon}>
            <Popup>
              <div>
                <h3>{museum.name}</h3>
                <p>{museum.location}</p>
                <p>
                  Discover{" "}
                  <Link to={`/${museum.id}`} key={museum.id}>
                    here
                  </Link>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Newsletter />
    </LandingPageContainer>
  )
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

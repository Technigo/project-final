import { useContext } from "react"
import { useParams, Navigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { IoRestaurantOutline } from "react-icons/io5"
import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteButton } from "../components/FavoriteButton"
import { CommentSection } from "../components/CommentSection"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

import museumList from "../../../backend/data/museums.json"
import styled from "styled-components"
import StyledButton from "../components/styled/Button.styled"
import { getOptimizedUrl } from "../util/UrlUtil"

export const DetailPage = () => {
  const { authState } = useContext(AuthContext)
  const { isAuthenticated } = authState

  const params = useParams()
  const museumId = params.slug
  const museum = museumList.find((museum) => museum.id === +museumId)

  if (!museum) {
    return <Navigate to="/not-found" />
  }

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
    <Container>
      <Background />
      <ImageContainerPhone>
        <ToHomepageBtn />
        <StyledImagePhone
          src={getOptimizedUrl(museum.url, 1200)}
          alt={`Image related to ${museum.name}`}
        />
      </ImageContainerPhone>

      <ContentContainer>
        <Content>
          <ImageContainerTablet>
            <ToHomepageBtn />
            <StyledImageTablet
              src={getOptimizedUrl(museum.url, 1200)}
              alt={`Image related to ${museum.name}`}
            />
          </ImageContainerTablet>

          <TextContainer>
            <NameContainer>
              <h3>{museum.name}</h3>
              <FavoriteButton museumId={museum.id} />
            </NameContainer>
            <p>{museum.location}</p>
            <Description>{museum.description} </Description>
            {museum.has_cafe ? (
              <CafeIconContainer>
                <IoRestaurantOutline />{" "}
              </CafeIconContainer>
            ) : (
              <p>This museum has no cafe or restaurant on its premises</p>
            )}
            <OpeningHours>
              <h4>Opening hours</h4>
              {museum.opening_hours.map((hours, index) => {
                const day = Object.keys(hours)[0]
                const time = hours[day]
                return (
                  <p key={index}>
                    {day}: {time}
                  </p>
                )
              })}
            </OpeningHours>
            <VisitWebsite>
              Visit the official website{" "}
              <a
                href={museum.website}
                target="_blank"
                rel="noopener noreferrer">
                here
              </a>
            </VisitWebsite>
            <TicketPrice>Ticket price: {museum.ticket_price}</TicketPrice>
            <Link to={"/shop"}>
              <StyledButton>Buy a ticket</StyledButton>{" "}
            </Link>
          </TextContainer>
        </Content>

        <CommentContainer>
          <h4>
            Have you been here? Share your experience with our friendly
            community!
          </h4>

          {isAuthenticated ? (
            <>
              <CommentSection museumId={museumId} />
            </>
          ) : (
            <p>
              <Link to={"/login"}>Log in</Link> to leave a review or read what
              visitors liked about this museum.
            </p>
          )}
        </CommentContainer>
        <MapContainer
          center={[museum.lat, museum.lon]}
          zoom={15}
          style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[museum.lat, museum.lon]} icon={customIcon}>
            <Popup>
              <div>
                <h3>{museum.name}</h3>
                <p>{museum.location}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </ContentContainer>
    </Container>
  )
}

//Styled components

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #232222;
  z-index: -1;
`

const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 0 20px 20px 20px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 20px;
    border-radius: 10px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ImageContainerPhone = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;

  @media (min-width: 768px) {
    display: none;
  }
`
const StyledImagePhone = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    display: none;
  }
`

const ImageContainerTablet = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: 40%;
    height: 80vh;
  }
`

const StyledImageTablet = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
`

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;

  h3 {
    font-size: 36px;
    margin: 18px 0;
  }
`

const NameContainer = styled.div`
  display: flex;
`

const Description = styled.p`
  margin: 5px 0;
`

const CafeIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  svg {
    margin-right: 8px;
  }
`

const OpeningHours = styled.div`
  h4 {
    margin-bottom: 5px;
  }
`
const TicketPrice = styled.p`
  margin-bottom: 5px;
`

const VisitWebsite = styled.p`
  margin-bottom: 5px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`

const CommentContainer = styled.div`
  padding: 20px;

   @media (min-width: 1024px) {
    width: 40%;
`

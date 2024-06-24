import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { IoRestaurantOutline } from "react-icons/io5"
import { BackButton } from "../components/BackButton"
import { FavoriteButton } from "../components/FavoriteButton"
import { CommentSection } from "../components/CommentSection"
import { AuthContext } from "../contexts/AuthContext"
import { MuseumMap } from "../components/MuseumMap"
import { LoginModal } from "../components/LoginModal"
import { StyledButton } from "../components/styled/Button.styled"
import { Background } from "../components/styled/Background.styled"
import { getOptimizedUrl } from "../util/utils.js"

export const DetailPage = () => {
  const { authState } = useContext(AuthContext)
  const { isAuthenticated } = authState
  const [museum, setMuseum] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const params = useParams()
  const museumId = params.slug

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const fetchMuseum = async () => {
      try {
        const response = await fetch("https://museek-2ejb.onrender.com/museums")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        const foundMuseum = data.find((museum) => museum.id === +museumId)
        setMuseum(foundMuseum)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchMuseum()
  }, [museumId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!museum) {
    return <Navigate to="/not-found" />
  }

  const buttonText =
    museum.ticket_price === "Free" || museum.ticket_price === "Donations"
      ? "Visit website"
      : "Buy ticket"

  return (
    <Container className={isModalOpen ? "blurred" : ""}>
      <Background bgColor="#222222" />
      <ImageContainerPhone>
        <BackButton />
        <StyledImagePhone
          src={getOptimizedUrl(museum.url, 1200)}
          alt={`Image related to ${museum.name}`}
        />
      </ImageContainerPhone>

      <ContentContainer>
        <Content>
          <ImageContainerTablet>
            <BackButton />
            <StyledImageTablet
              src={getOptimizedUrl(museum.url, 1200)}
              alt={`Image related to ${museum.name}`}
            />
          </ImageContainerTablet>

          <TextContainer>
            <FavoriteButton museumId={museum.id} />
            <Title>{museum.name}</Title>
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

            <TicketPrice>Ticket price: {museum.ticket_price}</TicketPrice>

            <a href={museum.website} target="_blank" rel="noopener noreferrer">
              <StyledButton aria-label="Visit official museum website">
                {buttonText}
              </StyledButton>{" "}
            </a>
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
              <span
                onClick={() => setModalOpen(true)}
                style={{ cursor: "pointer", color: "blue" }}>
                Log in
              </span>{" "}
              to leave a review or read what visitors liked about this museum.
            </p>
          )}
        </CommentContainer>
        <MuseumMap
          museums={[museum]}
          showLink={false}
          center={[museum.lat, museum.lon]}
        />
      </ContentContainer>
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        onLoginSuccess={() => {
          setModalOpen(false)
        }}
        modalMessage={modalMessage}
      />
    </Container>
  )
}

//Styled components

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.blurred {
    filter: blur(5px);
  }

  @media (min-width: 768px) {
    padding-top: 80px;
  }
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
    margin-top: 20px;

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
  position: relative;
`

const Title = styled.h3`
  font-size: 30px;
  margin: 18px 0;
  padding-right: 70px;
`

const Description = styled.p`
  margin: 5px 0;
`

const CafeIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 24px;
  margin-top: 8px;

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

const CommentContainer = styled.div`
  padding: 20px;
`

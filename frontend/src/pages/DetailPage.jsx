import { useContext } from "react"
import { useParams, Navigate } from "react-router-dom"
import { IoRestaurantOutline } from "react-icons/io5"
import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteFunction } from "../components/FavoriteFunction"
import { CommentSection } from "../components/CommentSection"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

import museumList from "../json/museums.json"
import styled from "styled-components"
import StyledButton from "../components/styled/Button.styled"

export const DetailPage = () => {
  const { authState } = useContext(AuthContext)
  const { isAuthenticated, accessToken } = authState

  const params = useParams()
  const museumId = params.slug
  const museum = museumList.find((museum) => museum.id === +museumId)

  if (!museum) {
    return <Navigate to="/not-found" />
  }

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={museum.url} alt={`Image related to ${museum.name}`} />
        <StyledToHomepageBtn />
      </ImageContainer>

      <Content>
        <TextContainer>
          <h3>{museum.name}</h3>
          <FavoriteFunction museumId={museum.id} />
          <p>{museum.location}</p>
          <p>{museum.description} </p>
          {museum.has_cafe ? (
            <IoRestaurantOutline />
          ) : (
            <p>This museum has no cafe or restaurant on its premises</p>
          )}
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
          <p>Ticket price: {museum.ticket_price}</p>
          <StyledButton>Buy a ticket</StyledButton>
          <p>
            Visit the official website{" "}
            <a href={museum.website} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </TextContainer>
      </Content>

      <CommentContainer>
        <h4>Have you been here? Let the community know what you thought!</h4>

        {isAuthenticated ? (
          <>
            <CommentSection museumId={museumId} />
          </>
        ) : (
          <p>
            <Link to={"/login"}>Log in </Link> or
            <Link to={"/register"}> sign up</Link> to leave a review or read
            what visitors liked about this museum!
          </p>
        )}
      </CommentContainer>
    </Container>
  )
}

//Styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;

  @media (min-width: 768px) {
    width: 30%;
    height: auto;
  }
`

const StyledToHomepageBtn = styled(ToHomepageBtn)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
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

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    width: 70%;
  }
`

const CommentContainer = styled.div`
  padding: 20px;
`

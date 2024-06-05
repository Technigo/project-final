import { useContext } from "react"
import { useParams, Navigate } from "react-router-dom"
import { IoRestaurantOutline } from "react-icons/io5"
import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteFunction } from "../components/FavoriteFunction"
import { PostComment } from "../components/PostComment"
import { GetComment } from "../components/GetComment"
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
    <div>
      <ToHomepageBtn />
      <StyledImage src={museum.url} alt={`Image related to ${museum.name}`} />
      <h3>{museum.name}</h3>
      <FavoriteFunction museumId={museum.id} />
      <p>{museum.location}</p>
      <p>{museum.description} </p>
      {museum.has_cafe ? (
        <IoRestaurantOutline />
      ) : (
        <p>This museum has no cafe or restaurant on their premises</p>
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
      <h4>Reviews</h4>

      {isAuthenticated ? (
        <>
          <PostComment museumId={museumId} />
          <GetComment museumId={museumId} />
        </>
      ) : (
        <p>
          <Link to={"/login"}>Log in </Link> or
          <Link to={"/register"}> sign up</Link> to see reviews from other users
        </p>
      )}
    </div>
  )
}

//Styled components

const StyledImage = styled.img`
  width: 100%; // Make the image as wide as the device
  height: 40vh; // Adjust the height as needed to make it rectangular
  object-fit: cover; // Ensure the image covers the area, cropping if necessary
  object-position: center; // Center the image
`

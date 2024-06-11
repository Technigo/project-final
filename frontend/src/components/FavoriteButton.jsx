import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext"

//In this component, user should be able to click on the icon
//I think we can only create this once we have global state of authorization set up as the program needs to know whether user is logged in
//If the user is logged in, the museum should be saved to the users profile and the heart should be filled to indicate museum is saved
//If user is not logged in, they should be redirected to register/login page

export const FavoriteButton = ({ museumId, inCard }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { authState } = useContext(AuthContext)
  const { accessToken } = authState

  const checkIfFavorite = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    }
    fetch(`https://museek-2ejb.onrender.com/favorites/${museumId}`, options)
      .then((response) => response.json())
      .then((response) => setIsFavorite(response.savedAsFavorite))
  }

  useEffect(() => {
    checkIfFavorite()
  }, [])

  const handleFavoriteToggle = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ museumId, accessToken }),
    }
    fetch("https://museek-2ejb.onrender.com/favorites/toggle", options)
      .then((response) => response.json())
      .then((response) => {
        setIsFavorite(response.savedAsFavorite)
      })
  }

  return (
    <FavoriteButtonWrapper inCard={inCard}>
      <Button onClick={handleFavoriteToggle}>
        {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </Button>
    </FavoriteButtonWrapper>
  )
}

//Styled components
const FavoriteButtonWrapper = styled.div`
  position: ${({ inCard }) => (inCard ? "static" : "absolute")};
  top: ${({ inCard }) => (inCard ? "0" : "20px")};
  right: ${({ inCard }) => (inCard ? "0" : "20px")};
`

const Button = styled.button`
  border: none;
  font-size: 40px;
  cursor: pointer;
  background-color: transparent;
  transition: transform 0.3s;
  color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext"

//In this component, user should be able to click on the icon
//I think we can only create this once we have global state of authorization set up as the program needs to know whether user is logged in
//If the user is logged in, the museum should be saved to the users profile and the heart should be filled to indicate museum is saved
//If user is not logged in, they should be redirected to register/login page

export const FavoriteButton = ({ museumId }) => {
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
    fetch(`http://localhost:3000/favorites/${museumId}`, options)
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
    fetch("http://localhost:3000/favorites/toggle", options)
      .then((response) => response.json())
      .then((response) => {
        setIsFavorite(response.savedAsFavorite)
      })
  }

  return (
    <>
      <Button onClick={handleFavoriteToggle}>
        {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </Button>
    </>
  )
}

//Styled components

const Button = styled.button`
  border: none;
  font-size: 40px;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
`

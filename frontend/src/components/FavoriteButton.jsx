import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext"
import { LoginModal } from "./LoginModal"

export const FavoriteButton = ({ museumId, inCard }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("");
  const { authState } = useContext(AuthContext)
  const { accessToken, isAuthenticated } = authState

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
    if (isAuthenticated) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ museumId, accessToken }),
      }

      try {
        const response = await fetch(
          "https://museek-2ejb.onrender.com/favorites/toggle",
          options
        )
        if (!response.ok) {
          throw new Error("Failed to toggle favorite status")
        }
        const data = await response.json()
        setIsFavorite(data.savedAsFavorite)
      } catch (error) {
        console.error("Error toggling favorite status:", error.message)
      }
    } else {
      setModalOpen(true)
    }
  }

  const handleLoginSuccess = async () => {
    setModalOpen(false)
    await checkIfFavorite()
  }

  return (
    <>
      <FavoriteButtonWrapper inCard={inCard}>
        <Button onClick={handleFavoriteToggle}>
          {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </Button>
      </FavoriteButtonWrapper>
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        modalMessage={modalMessage} 
      />
    </>
  )
}

//Styled components
const FavoriteButtonWrapper = styled.div.attrs((props) => ({
  inCard: props.inCard,
}))`
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

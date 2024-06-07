import { useEffect, useState, useRef, useCallback } from "react"
import { useSpaceFeedStore } from "../stores/useSpaceFeedStore"
import styled from "styled-components"
import { Button } from "./Button"
import rocketIcon from "./../assets/icons/rocket.png"
import rocketIconLiked from "./../assets/icons/rocket-filled.png"

const LikeButton = styled.button`
  background: #000000;
  color: #ffffff;
  font-family: var(--font-size-text-mob);
  border: none;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const FeedContainer = styled.div`
  width: 100%;
  max-width: 280px;
  max-height: 850px;
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 760px;
    max-height: 1100px;
  }

  ul {
    list-style: none;
  }

  li {
    text-decoration: none;
  }
`
export const SpaceFeed = () => {
  const {
    spaceFeed,
    fetchSpaceFeed,
    postSpaceMessage,
    likeSpaceMessage,
    loading,
    error,
  } = useSpaceFeedStore()
  const [newMessage, setNewMessage] = useState("")
  const [messageError, setMessageError] = useState("")
  const [likedMessages, setLikedMessages] = useState({})

  useEffect(() => {
    fetchSpaceFeed()

    // Retrieve liked messages from local storage
    const storedLikedMessages = localStorage.getItem("likedMessages")
    if (storedLikedMessages) {
      setLikedMessages(JSON.parse(storedLikedMessages))
    }
  }, [fetchSpaceFeed])

  // Update liked status for each message when fetching the space feed
  useEffect(() => {
    if (spaceFeed && spaceFeed.length > 0) {
      const initialLikedMessages = spaceFeed.reduce((acc, message) => {
        acc[message._id] = message.likes > 0
        return acc
      }, {})
      setLikedMessages(initialLikedMessages)
    }
  }, [spaceFeed])

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
    setMessageError("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newMessage.length < 5 || newMessage.length > 140) {
      setMessageError("Message must be between 5 and 140 characters")
      return
    }

    postSpaceMessage(newMessage)
    setNewMessage("")
    setMessageError("")
  }

  const handleLike = (messageId) => {
    likeSpaceMessage(messageId)
    setLikedMessages((prevLikedMessages) => {
      const updatedLikedMessages = {
        ...prevLikedMessages,
        [messageId]: !prevLikedMessages[messageId],
      }

      // Save liked messages to local storage
      localStorage.setItem(
        "likedMessages",
        JSON.stringify(updatedLikedMessages)
      )
      return updatedLikedMessages
    })
  }

  return (
    <div>
      <h3>SpaceFeed</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            type="text"
            value={newMessage}
            placeholder=""
            required
            onChange={handleNewMessage}
          />
        </label>
        <Button type="submit" disabled={loading}>
          POST
        </Button>
        {messageError && <p>{messageError}</p>}
      </form>

      {messageError && <p>{messageError}</p>}

      {loading && <p>Loading...</p>}

      <FeedContainer>
        <ul>
          {spaceFeed && spaceFeed.length > 0 ? (
            spaceFeed.map((message) => (
              <li key={message._id}>
                <p>{message.message}</p>
                <LikeButton onClick={() => handleLike(message._id)}>
                  <Icon
                    src={
                      likedMessages[message._id] ? rocketIconLiked : rocketIcon
                    }
                    alt="Like Icon"
                  />{" "}
                  x{message.likes}
                </LikeButton>
              </li>
            ))
          ) : (
            <p>No messages to display</p>
          )}
        </ul>
      </FeedContainer>
    </div>
  )
}

export default SpaceFeed

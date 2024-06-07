import { useEffect, useState, useRef, useCallback } from "react"
import { useSpaceFeedStore } from "../stores/useSpaceFeedStore"
import styled from "styled-components"
import rocketIcon from "./../assets/icons/rocket.png"
import rocketIconLiked from "./../assets/icons/rocket-filled.png"
import { formatDistanceToNow } from "date-fns"

const FeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-color-secondary);
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-mob);

  h2 {
    font-family: var(--font-family-headlines);
    font-size: var(--font-size-h2-mob);
    color: var(--headline-color);

    @media (min-width: 768px) {
      font-size: var(--font-size-h2-desktop);
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 925px;
    max-height: 1100px;
    font-size: var(--font-size-large);
  }

  textarea {
    width: 280px;
    height: 60px;
    border-radius: 8px;

    @media (min-width: 768px) {
      width: 660px;
      height: 140px;
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 660px;
`

const Button = styled.button`
  width: 150px;
  height: 45px;
  background-color: #cf4b14;
  color: #ffffff;
  border-radius: 40px;
  border: none;
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-mob);
  font-weight: 700;
  display: block;
  justify-content: center;

  &:hover {
    background-color: #ee723f;
  }

  &.active {
    background-color: #ee723f;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: var(--font-size-large);
    display: block;
  }
`

const LikeButton = styled.button`
  background: #161822;
  color: #ffffff;
  font-family: var(--font-family-text);
  border: none;
  cursor: pointer;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const MessageContainer = styled.div`
  width: 100%;
  max-height: 1000px;
  overflow-y: auto;
  text-align: center;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-primary);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 660px;
    max-height: 1100px;
    font-size: var(--font-size-large);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
  }

  li {
    text-decoration: none;
    background-color: #161822;
    border-radius: 8px;
    padding: 20px 16px;
    margin-bottom: 20px;
    width: 100%;

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #161822;
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
    <FeedContainer>
      <h2>CELESTIAL FEED</h2>
      <p>
        Share your cosmic thoughts, discoveries, and adventures with fellow
        stargazers! Post updates, ask questions about the cosmos, and engage in
        enlightening conversations. Let's explore the wonders of the universe
        together!
      </p>

      <Form onSubmit={handleSubmit}>
        <label>
          <textarea
            type="text"
            value={newMessage}
            placeholder="Write here..."
            required
            onChange={handleNewMessage}
          />
        </label>
        <Button type="submit" disabled={loading}>
          POST
        </Button>
        {messageError && <p>{messageError}</p>}
      </Form>

      {messageError && <p>{messageError}</p>}

      {loading && <p>Loading...</p>}

      <MessageContainer>
        <ul>
          {spaceFeed && spaceFeed.length > 0 ? (
            spaceFeed.map((message) => (
              <li key={message._id}>
                <p>{message.message}</p>
                <Details>
                  <LikeButton onClick={() => handleLike(message._id)}>
                    <Icon
                      src={
                        likedMessages[message._id]
                          ? rocketIconLiked
                          : rocketIcon
                      }
                      alt="Like Icon"
                    />{" "}
                    x{message.likes}
                  </LikeButton>
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                </Details>
              </li>
            ))
          ) : (
            <p>No messages to display</p>
          )}
        </ul>
      </MessageContainer>
    </FeedContainer>
  )
}

export default SpaceFeed

import { useEffect, useState } from "react"
import { useSpaceFeedStore } from "./stores/useSpaceFeedStore"

export const SpaceFeed = () => {
  const {
    SpaceFeed,
    fetchSpaceFeed,
    postSpaceMessage,
    likeSpaceMessage,
    loading,
    error,
  } = useSpaceFeedStore()
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    fetchSpaceFeed()
  }, [fetchSpaceFeed])

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newMessage.length > 5 && newMessage.length < 140) {
      postSpaceMessage(newMessage)
      setNewMessage("")
    }
  }

  const handleLike = (messageId) => {
    likeSpaceMessage(messageId)
  }

  return (
    <div>
      <h3>SpaceFeed</h3>

      <form className="space-feed-form" onSubmit={handleSubmit}>
        <label>
          <textarea
            className="message-textarea"
            type="text"
            value={newMessage}
            placeholder=""
            required
            onChange={handleNewMessage}
            minLength={5}
            maxLength={140}
          />
        </label>
        <button type="submit" disabled={loading}>
          Post
        </button>
      </form>
      {error && <p>{error.message}</p>}
      <ul>
        {SpaceFeed.map((message) => (
          <li key={message._id}>
            <p>{message.message}</p>
            <button onClick={() => handleLike(message._id)}>
              Like ({message.likes})
            </button>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  )
}

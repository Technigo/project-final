import { useEffect, useState } from "react";
import { useSpaceFeedStore } from "../stores/useSpaceFeedStore";

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

  useEffect(() => {
    fetchSpaceFeed();
  }, [fetchSpaceFeed]);

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
    setMessageError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.length < 5 || newMessage.length > 140) {
      setMessageError("Message must be between 5 and 140 characters")
      return
    }

    postSpaceMessage(newMessage)
    setNewMessage("")
    setMessageError("")
  }

  const handleLike = (messageId) => {
    likeSpaceMessage(messageId);
  };

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
          />
        </label>
        <button type="submit" disabled={loading}>
          Post
        </button>
        {messageError && <p className="message-error">{messageError}</p>}
      </form>

      {messageError && <p>{messageError}</p>}

      {loading && <p>Loading...</p>}

      <ul>
        {spaceFeed && spaceFeed.length > 0 ? (
          spaceFeed.map((message) => (
            <li key={message._id}>
              <p>{message.message}</p>
              <button
                className="like-button"
                onClick={() => handleLike(message._id)}>
                Like ({message.likes})
              </button>
            </li>
          ))
        ) : (
          <p>No messages to display</p>
        )}
      </ul>
    </div>
  );
};

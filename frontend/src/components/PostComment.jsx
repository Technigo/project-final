import { useContext, useState } from "react"
import styled from "styled-components"
import StyledButton from "./styled/Button.styled"
import { AuthContext } from "../contexts/AuthContext"
// import { AuthContext } from "../contexts/AuthContext"

export const PostComment = ({ museumId, onNewComment }) => {
  const { authState } = useContext(AuthContext)
  const { accessToken } = authState
  const [message, setMessage] = useState("")
  const [count, setCount] = useState(0)

  // Get the logged-in user info
  // const { user } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          museumId,
          message,
          accessToken,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit review")
      }

      const newReview = await response.json()
      console.log("Review submitted:", newReview)
      setMessage("")
      setCount(0)

      // Update the comments in the parent component
      onNewComment(newReview)
    } catch (error) {
      console.error("Error submitting review:", error.message)
    }
  }

  return (
    <CommentForm onSubmit={handleSubmit}>
      <label htmlFor="review-form">Post a review</label>
      <TextArea
        id="review-form"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
          setCount(e.target.value.length)
        }}
        required
        minLength={10}
        maxLength={250}
        placeholder="Share your thoughts and best tips in the surrounding neighborhood!"
      />
      <CharacterCount>{count}/250</CharacterCount>
      <StyledButton type="submit">Submit</StyledButton>
    </CommentForm>
  )
}

const CommentForm = styled.form`
  margin-top: 20px;
  position: relative;
  width: 100%;
  max-width: 600px;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
`

const CharacterCount = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: #6c757d;
  font-size: 0.8rem;
`

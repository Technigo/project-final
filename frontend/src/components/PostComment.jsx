//this is work in progress

import { useState } from "react"

export const PostComment = ({ museumId }) => {
  const [message, setMessage] = useState("")
  const [count, setCount] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ museumId, message }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit review")
      }

      const newReview = await response.json()
      console.log("Review submitted:", newReview)
      setMessage("")
      setCount(0)
    } catch (error) {
      console.error("Error submitting review:", error.message)
    }
  }

  return (
    <div>
      <label htmlFor="review-form">Post a review</label>
      <form onSubmit={handleSubmit}>
        <textarea
          id="review-form"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setCount(e.target.value.length)
          }}
          required
          minLength={10}
          maxLength={250}
          placeholder="Share your thoughts and best tips in the surrounding neighborhood!"></textarea>
        <button type="submit">Submit</button>
        <p>{count}/250</p>
      </form>
    </div>
  )
}

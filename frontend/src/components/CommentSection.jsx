import { useEffect, useState } from "react"
import { GetComment } from "./GetComment"
import { PostComment } from "./PostComment"

export const CommentSection = ({ museumId }) => {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:3000/reviews")
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      //Filter comments based on museumId
      const filteredComments = data.filter(
        (comment) => String(comment.museumId) === museumId
      )
      setComments(filteredComments)
    } catch (error) {
      console.error("Error fetching data", error)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [museumId])
  
  const handleNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments])
  }

  return (
    <div>
      <PostComment museumId={museumId} onNewComment={handleNewComment} />
      <GetComment comments={comments} />
    </div>
  )
}

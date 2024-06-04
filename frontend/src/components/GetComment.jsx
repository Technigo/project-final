import moment from "moment"
import { useEffect, useState } from "react"

//TO UPDATE: add user name, delete method, authentication
//Fetch more often? so user don't need to refresh after sending a comment

export const GetComment = ({ museumId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
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
    fetchComments()
  }, [museumId])

  return (
    <div>
      {comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <p>{comment.message}</p>
          <p>{moment(comment.createdAt).format("LL")}</p>
        </div>
      ))}
    </div>
  )
}

import moment from "moment"
import { useEffect, useState } from "react"

export const GetComment = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setComments(data)
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
    fetchComments()
  }, [])

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

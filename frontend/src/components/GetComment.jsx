import moment from "moment"
import styled from "styled-components"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

//TO UPDATE: add user name

export const GetComment = ({ comments }) => {
  const [deletedComments, setDeletedComments] = useState([])

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/reviews/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        // If the comment was successfully deleted on the server, update the state
        setDeletedComments([...deletedComments, commentId])
      } else {
        console.error("Failed to delete comment")
      }
    } catch (error) {
      console.error("Failed to delete comment:", error)
    }
  }

  return (
    <div>
      {comments.map(
        (comment) =>
          // Check if comment is not already deleted
          !deletedComments.includes(comment._id) && (
            <div className="comment" key={comment._id}>
              <p>{comment.message}</p>
              <span>{moment(comment.createdAt).format("LL")}</span>
              <StyledRxCrossIcon onClick={() => deleteComment(comment._id)} />

              {/* <span>
            {comment.user && comment.user.name
              ? comment.user.name
              : "Anonymous"}
          </span> */}
            </div>
          )
      )}
    </div>
  )
}

const StyledRxCrossIcon = styled(RxCross2)`
  cursor: pointer;

  &:hover {
    color: red; /* Change color on hover (optional) */
  }
`

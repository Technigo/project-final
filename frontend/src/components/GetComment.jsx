import moment from "moment"

//TO UPDATE: add user name, delete method

export const GetComment = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <p>{comment.message}</p>
          <span>{moment(comment.createdAt).format("LL")}</span>
          {/* <span>
            {comment.user && comment.user.name
              ? comment.user.name
              : "Anonymous"}
          </span> */}
        </div>
      ))}
    </div>
  )
}

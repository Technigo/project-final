import moment from "moment";
import styled from "styled-components";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../contexts/AuthContext";

//TO UPDATE: add user name

export const GetComment = ({ comments, showMuseumName, hideDeleteBtn }) => {
  const { authState } = useContext(AuthContext);
  const [deletedComments, setDeletedComments] = useState([]);

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://museek-2ejb.onrender.com/reviews/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // If the comment was successfully deleted on the server, update the state
        setDeletedComments([...deletedComments, commentId]);
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return (
    <CommentContainer>
      {comments.map(
        (comment) =>
          // Check if comment is not already deleted
          !deletedComments.includes(comment._id) && (
            <Comment key={comment._id}>
              <CommentText>{comment.message}</CommentText>
              <CommentDate>
                {moment(comment.createdAt).format("LL")}
              </CommentDate>
              {hideDeleteBtn ||
              authState.user?.id !== comment.userId ? undefined : (
                <StyledRxCrossIcon onClick={() => deleteComment(comment._id)} />
              )}
              <p>{showMuseumName ? comment.museumName : comment.userName}</p>
            </Comment>
          )
      )}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  margin-top: 20px;
  max-width: 600px;
`;

const Comment = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  position: relative;
  padding: 5px 15px;
  margin-bottom: 20px;
`;

const CommentText = styled.p`
  word-wrap: break-word;
  margin-bottom: 5px;
`;

const CommentDate = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
`;

const StyledRxCrossIcon = styled(RxCross2)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.2rem;
  color: #6c757d;

  &:hover {
    color: red;
  }
`;

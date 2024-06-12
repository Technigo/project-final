import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetComment } from "./GetComment"

export const UserReviews = () => {
  const { authState } = useContext(AuthContext)
  const { accessToken } = authState
  const [postedReviews, setPostedReviews] = useState([])

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    }
    fetch(`https://museek-2ejb.onrender.com/reviews/user`, options)
      .then((response) => response.json())
      .then((response) => setPostedReviews(response))
  }, [])

  return <GetComment hideDeleteBtn={true} comments={postedReviews} showMuseumName={true} />;
};

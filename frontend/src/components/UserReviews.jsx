import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { GetComment } from "./GetComment";

export const UserReviews = () => {
  const { authState } = useContext(AuthContext);
  const { accessToken } = authState;
  const [postedReviews, setPostedReviews] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    };
    fetch(`http://localhost:3000/reviews/user`, options)
      .then((response) => response.json())
      .then((response) => setPostedReviews(response));
  }, []);

  return <GetComment comments={postedReviews} showMuseumName={true} />;
};

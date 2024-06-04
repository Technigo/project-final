import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";

//In this component, user should be able to click on the icon
//I think we can only create this once we have global state of authorization set up as the program needs to know whether user is logged in
//If the user is logged in, the museum should be saved to the users profile and the heart should be filled to indicate museum is saved
//If user is not logged in, they should be redirected to register/login page

export const FavoriteFunction = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoritedChange = () => {
    setIsFavorited((isFavorited) => !isFavorited);
    const options = {
      method: "POST",
    };
    //fetch(`, options)
    //.then((response) => response.json())
    //.then((response) => {
    //setHasBeenLiked(true);
    //onLike(response);
    //})
  };

  return (
    <>
      <button onClick={isFavorited ? undefined : postNewSave}>
        <IoMdHeartEmpty />
        <IoMdHeart />
      </button>
    </>
  );
};

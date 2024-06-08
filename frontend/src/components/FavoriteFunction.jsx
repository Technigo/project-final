import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import styled from "styled-components";

//In this component, user should be able to click on the icon
//I think we can only create this once we have global state of authorization set up as the program needs to know whether user is logged in
//If the user is logged in, the museum should be saved to the users profile and the heart should be filled to indicate museum is saved
//If user is not logged in, they should be redirected to register/login page

export const FavoriteFunction = ({ museumId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritedChange = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ museumId }),
    };
    fetch("http://localhost:3000/favorites", options)
      .then((response) => response.json())
      .then((response) => {
        setIsFavorite(response.savedAsFavorite);
      });
  };

  return (
    <>
      <Button onClick={handleFavoritedChange}>
        {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </Button>
    </>
  );
};

//Styled components

const Button = styled.button`
  border: none;
  padding: 5px;
  display: block;
  font-size: 25px;
  width: 10px;
  cursor: pointer;
  position: absolute;
  top: 15;
  right: 1;
`;

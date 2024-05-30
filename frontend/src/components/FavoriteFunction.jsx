import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"

//In this component, user should be able to click on the icon
//If the user is logged in, the museum should be saved to the users profile and the heart should be filled to indicate museum is saved
//If user is not logged in, they should be redirected to register/login page

export const FavoriteFunction = () => {
  return (
    <div>
      <IoMdHeartEmpty />
      <IoMdHeart />
    </div>
  )
}

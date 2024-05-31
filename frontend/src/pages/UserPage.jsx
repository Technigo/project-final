import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { IoRestaurantOutline } from "react-icons/io5"

//In here we should bring in the code from auth project and reuse as much as possible
//features that should be displayed here: liked museums, written comments, purchased tickets
export const UserPage = () => {
  return (
    <div>
      <ToHomepageBtn />
      <p>Liked museums</p>
      <p>Posted reviews</p>
      <p>Purchased tickets</p>
    </div>
  )
}

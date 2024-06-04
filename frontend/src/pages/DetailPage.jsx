import { useParams, Navigate } from "react-router-dom"
import { IoRestaurantOutline } from "react-icons/io5"
import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteFunction } from "../components/FavoriteFunction"
import { PostComment } from "../components/PostComment"
import { GetComment } from "../components/GetComment"
import museumList from "../json/museums.json"
import image1 from "../assets/image1.png"
import "./TemporaryStyle.css"

export const DetailPage = () => {
  const params = useParams()
  const museumId = params.slug
  const museum = museumList.find((museum) => museum.id === +museumId)

  if (!museum) {
    return <Navigate to="/not-found" />
  }

  return (
    <div>
      <ToHomepageBtn />
      <img src={image1} alt="Description of image" />
      <h3>{museum.name}</h3>
      <FavoriteFunction />
      <p>{museum.location}</p>
      <p>{museum.description} </p>
      {museum.has_cafe ? (
        <IoRestaurantOutline />
      ) : (
        <p>This museum has no cafe or restaurant on their premises</p>
      )}

      <h4>Opening hours</h4>
      {museum.opening_hours.map((hours, index) => {
        const day = Object.keys(hours)[0]
        const time = hours[day]
        return (
          <p key={index}>
            {day}: {time}
          </p>
        )
      })}

      <p>Ticket price: {museum.ticket_price}</p>
      <button>Buy a ticket</button>

      <p>
        Visit the official website{" "}
        <a href={museum.website} target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>

      <h4>Reviews</h4>

      <PostComment museumId={museumId} />
      <GetComment museumId={museumId} />
    </div>
  )
}

import { useParams, Navigate } from "react-router-dom"
import { IoRestaurantOutline } from "react-icons/io5"

import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteFunction } from "../components/FavoriteFunction"
import museumList from "../json/museums.json"
import "./TemporaryStyle.css"

import image1 from "../assets/image1.png"

export const DetailPage = () => {
  const params = useParams()
  const museumId = Number(params.slug)
  const museum = museumList.find((museum) => museum.id === museumId)

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
      <p>Log in to see the reviews</p>

      <div className="comment">
        <p>
          The Museum of Romantic Life is a hidden gem in Paris, offering a
          tranquil escape into the world of Romanticism. The charming garden and
          cozy café made it a perfect afternoon retreat.
        </p>
        <p>Written by Etna</p>
      </div>
      <div className="comment">
        <p>
          {" "}
          Visiting the Museum of Romantic Life was like stepping back in time to
          the 19th century. The beautiful exhibits and serene atmosphere left me
          feeling inspired and relaxed.
        </p>
        <p>Written by Alma</p>
      </div>
    </div>
  )
}

import { useParams, Navigate } from "react-router-dom"
import { ToHomepageBtn } from "../components/ToHomepageBtn"
import { FavoriteFunction } from "../components/FavoriteFunction"
import museumList from "../json/museums.json"
import "./TemporaryStyle.css"

import image1 from "../assets/image1.png"

export const DetailPage = () => {
  const params = useParams()
  const museumId = params.slug
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
      <p>16 Rue Chaptal, 75009 Paris, France</p>
      <p>
        Located in the heart of Paris, the Museum of Romantic Life is dedicated
        to the Romanticism movement, showcasing the works and memorabilia of
        notable Romantic artists. Housed in a charming 19th-century mansion, the
        museum offers a serene escape with its beautiful garden and café.
      </p>
      <h4>Opening hours</h4>
      <p>Mon: Closed</p>
      <p>Tue-Sun: 10:00-18:00</p>

      <p>Ticket price: Free</p>
      <p>Buy a ticket</p>

      <h4>Reviews</h4>
      <div className="comment">
        <p>
          The Museum of Romantic Life is a hidden gem in Paris, offering a
          tranquil escape into the world of Romanticism. The charming garden and
          cozy café made it a perfect afternoon retreat.
        </p>
        <p>Written by Alma</p>
      </div>
      <div className="comment">
        <p>
          {" "}
          Visiting the Museum of Romantic Life was like stepping back in time to
          the 19th century. The beautiful exhibits and serene atmosphere left me
          feeling inspired and relaxed.
        </p>
        <p>Written by Etna</p>
      </div>
    </div>
  )
}

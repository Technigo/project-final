import { Link } from "react-router-dom"

export const MuseumCard = ({ museum }) => {
  return (
    <div>
      <Link to={`/${museum.id}`} key={museum.id}>
        <div>{museum.name}</div>
      </Link>
    </div>
  )
}

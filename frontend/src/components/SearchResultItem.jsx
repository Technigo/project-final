import { Link } from "react-router-dom"

export const SearchResultItem = ({ museum }) => {
  return (
    <>
      <Link to={`/${museum.id}`} key={museum.id}>
        <div>{museum.name}</div>
      </Link>
      <div>{museum.location}</div>
      <div>{museum.website}</div>
    </>
  )
}

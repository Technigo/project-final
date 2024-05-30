import { Link } from "react-router-dom"
import museumList from "../json/museums.json"
import { useState } from "react"

export const MuseumCardContainer = () => {
  const [amountToShow, setAmountToShow] = useState(4)

  const showMore = () => setAmountToShow(amountToShow + 4)

  const showMuseums = () =>
    museumList.slice(0, amountToShow).map((museum, index) => (
      <Link to={`/${museum.id}`}>
        <div key={index}>{museum.name}</div>
      </Link>
    ))
  return (
    <>
      <div>{showMuseums()}</div>
      {amountToShow <= museumList.length && (
        <button onClick={showMore}> Show more...</button>
      )}
    </>
  )
}

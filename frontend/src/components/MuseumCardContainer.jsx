import { useState } from "react"
import museumList from "../json/museums.json"
import { MuseumCard } from "./MuseumCard"

export const MuseumCardContainer = () => {
  const [amountToShow, setAmountToShow] = useState(4)

  const showMore = () => setAmountToShow(amountToShow + 4)

  const showMuseums = () =>
    museumList
      .slice(0, amountToShow)
      .map((museum, id) => <MuseumCard museum={museum} key={id} />)
  return (
    <>
      <div>{showMuseums()}</div>
      {amountToShow <= museumList.length && (
        <button onClick={showMore}> Show more...</button>
      )}
    </>
  )
}

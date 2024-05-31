import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export const ShowPlanet = () => {
  const { name } = useParams()
  const URL = `https://project-final-45vw.onrender.com/planets/${name}`
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlanet = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch planet ${name}, reload page and try again`
          )
        }
        const data = await response.json()
        setPlanet(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlanet()
  }, [URL, name])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!planet) {
    return <div>No planet data available</div>
  }

  return (
    <div className="planet-card">
      <h1>{planet.name}</h1>
      <p>Nickname: {planet.nickname}</p>
      <p>Moons: {planet.moons}</p>
      <p>Asteroids: {planet.asteroids}</p>
      <p>Material: {planet.material}</p>
      <p>Surface Temperature: {planet.surfaceTemperature.range}</p>
      <p>Weather Climate: {planet.weatherClimate}</p>
      <p>Travel Time: {planet.travelTime}</p>
      <p>{planet.curiosa}</p>
      <img src={`/images/${planet.image}`} alt={planet.name} />
    </div>
  )
}

// import { useParam } from "react-router-dom"
// import planets from "data json"
// import { Planet } from "./Planet";

// export const ShowPlanet = () => {
//     const params = useParam()
//     const planetMatch = planets.find((planet)=> planet.name === params.name)
//     return (
//         <div className="orderPage">
//         <Planet name={(planetMatch.name)} image ={planetMatch.image}/>
//         </div>
//     )
// }

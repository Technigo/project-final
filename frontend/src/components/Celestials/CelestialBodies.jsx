import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CelestialContent } from "./CelestialContent"
import { Loading } from "../Loading"

export const CelestialBodies = () => {
  const { name } = useParams()
  const [oneBody, setOneBody] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const URL = `https://project-final-45vw.onrender.com/celestial/${name}`

  useEffect(() => {
    const fetchOneBody = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch any celestial body, reload page and try again.`
          )
        }
        const data = await response.json()
        setOneBody(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchOneBody()
  }, [name])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <CelestialContent oneBody={oneBody} />
}

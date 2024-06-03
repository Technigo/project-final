import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animationData from "../assets/404NotFound.json"

export const NotFoundPage = () => {
  return (
    <div className="notFound-container">
      <div className="notFound-content">
        <p>Houston, we have a problem. 404 Space Not Found.</p>
        <Lottie animationData={animationData} />
      </div>
      <Link className="goHome" to="/">
        <p>Go back home</p>
      </Link>
    </div>
  )
}

import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animationData from "../assets/404NotFound.json"
import styled from "styled-components"

export const NotFound = () => {
  return (
    <div className="notFound-container">
      <div className="notFound-content">
        <Lottie animationData={animationData} />
      </div>
      <Link className="goHome" to="/">
        <p>Go back home</p>
      </Link>
    </div>
  )
}

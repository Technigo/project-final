import { Link } from "react-router-dom"
import styled from "styled-components"
import backgroundImage from "../assets/images/404background.jpg"

const NotFoundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff; /* Text color for contrast */
`

const NotFoundContent = styled.div`
  text-align: center;
`

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <p>404</p>
        <p>Houston, we have a problem:</p>
        <p>You are lost in space</p>
      </NotFoundContent>
      <Link className="goHome" to="/">
        <p>Go back home</p>
      </Link>
    </NotFoundContainer>
  )
}

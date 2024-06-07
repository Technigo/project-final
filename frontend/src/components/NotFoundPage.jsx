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
  color: #ffffff;
`

const NotFoundContent = styled.div`
  font-size: var(--font-size-h1-desktop);
  text-align: center;
`

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <h1>
          404<br>NOT FOUND</br>
        </h1>
        <p>Houston, we have a problem:</p>
        <p>You are lost in space</p>
      </NotFoundContent>
      <Link className="goHome" to="/">
        <button>GO HOME</button>
      </Link>
    </NotFoundContainer>
  )
}

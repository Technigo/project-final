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
  color: #FFFFF;
`

const Font = styled.div`
h1 {
  font-family: "Space Mono";
}
p {
  font-family: "Roboto Mono";
  color: #CF4B14;
}
}`

const NotFoundContent = styled.div`
  text-align: center;
`

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <Font>
          <h1>
            404<br>NOT FOUND</br>
          </h1>
          <p>Houston, we have a problem:</p>
          <p>You are lost in space</p>
        </Font>
      </NotFoundContent>
      <Link className="goHome" to="/">
        <button>GO HOME</button>
      </Link>
    </NotFoundContainer>
  )
}

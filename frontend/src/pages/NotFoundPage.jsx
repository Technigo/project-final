import styled from "styled-components"
import StyledLoginPage from "../components/styled/LoginPage.styled.jsx"
import { Link } from "react-router-dom"
import StyledButton from "../components/styled/Button.styled.jsx"

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Background />

      <StyledLoginPage>
        <h4>404: Artifact Not Found</h4>
        <p>
          Oh no! You've uncovered a missing exhibit. This page is as elusive as
          a hidden treasure. But don't worry, there are hundreds of museum to
          explore!
        </p>{" "}
        <Link to="/museums">
          <StyledButton>Keep exploring</StyledButton>
        </Link>
      </StyledLoginPage>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  padding-top: 80px;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dee0e2;
  z-index: -999;
`

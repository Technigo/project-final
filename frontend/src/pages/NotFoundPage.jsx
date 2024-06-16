import styled from "styled-components"
import { StyledContainer } from "../components/styled/LoginPage.styled.jsx"
import { Link } from "react-router-dom"
import { StyledButton } from "../components/styled/Button.styled.jsx"
import { Background } from "../components/styled/Background.styled.jsx"

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Background bgColor="#dee0e2" />

      <StyledContainer>
        <h4>404: Artifact Not Found</h4>
        <p>
          Oh no! You've uncovered a missing exhibit. This page is as elusive as
          a hidden treasure. But don't worry, there are hundreds of museum to
          explore!
        </p>{" "}
        <Link to="/museums">
          <StyledButton>Keep exploring</StyledButton>
        </Link>
      </StyledContainer>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  padding-top: 80px;
`

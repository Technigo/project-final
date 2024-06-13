import { Link } from "react-router-dom"
import StyledButton from "../components/styled/Button.styled.jsx"
import styled from "styled-components"

export const CTA = () => {
  return (
    <CTAContainer>
      <TextContainer>
        <p>
          Discover hidden treasures and captivating cultural wonders with
          MuSeek. Register now to begin your journey and experience an authentic
          alternative to mainstream tourist attractions.{" "}
        </p>
      </TextContainer>
      <ContentContainer>
        <Link to="/register">
          <StyledButton>Register</StyledButton>{" "}
        </Link>{" "}
      </ContentContainer>
    </CTAContainer>
  )
}

const CTAContainer = styled.div`
  padding: 70px 20px;
  background-color: #222222;
  border-bottom: 0.5px solid black;

  @media (min-width: 1280px) {
    padding: 100px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
`

const TextContainer = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  color: white;
  font-size: 18px;
  line-height: 1.6;
  text-align: left;
`

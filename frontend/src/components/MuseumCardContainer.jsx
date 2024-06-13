import { MuseumCard } from "./MuseumCard"
import styled from "styled-components"

export const MuseumCardContainer = ({ results, amountToShow }) => {
  const showMuseums = () =>
    results
      .slice(0, amountToShow)
      .map((museum, id) => <MuseumCard museum={museum} key={id} />)

  return (
    <StyledMuseumCardContainer>
      <MuseumCardGrid>{showMuseums()}</MuseumCardGrid>
    </StyledMuseumCardContainer>
  )
}

const MuseumCardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0 20px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 942px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 100px;
  }
`

const StyledMuseumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  background-color: #333333;

  button {
    margin: 20px auto 0 auto;
  }
`

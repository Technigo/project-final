import styled from "styled-components"

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h4>404: Artifact Not Found</h4>
      <p>
        Oh no! You've uncovered a missing exhibit. This page is as elusive as a
        hidden treasure. But don't worry, there are hundreds of museum to
        explore!
      </p>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  padding-top: 80px;
`

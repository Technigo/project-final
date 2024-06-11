import styled from "styled-components"
import { LuArrowLeftCircle } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <ToHomepageBtnStyled>
      <a onClick={goBack}>
        <IconContainer>
          <LuArrowLeftCircle />
        </IconContainer>
      </a>
    </ToHomepageBtnStyled>
  )
}

const ToHomepageBtnStyled = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  font-size: 36px;
  cursor: pointer;

  a {
    color: white;
  }

  @media (min-width: 768px) {
    top: 10px;
  }
`
const IconContainer = styled.div`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

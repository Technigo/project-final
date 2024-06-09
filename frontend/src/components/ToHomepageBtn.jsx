import styled from "styled-components"
import { LuArrowLeftCircle } from "react-icons/lu";
import { Link } from "react-router-dom"

export const ToHomepageBtn = () => {
  return (
    <ToHomepageBtnStyled>
      <Link to={"/"}>
        <LuArrowLeftCircle />
      </Link>
    </ToHomepageBtnStyled>
  )
}

const ToHomepageBtnStyled = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 1;
  color: white;
  font-size: 36px;
`

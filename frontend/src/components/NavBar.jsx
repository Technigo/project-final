import { Link } from "react-router-dom"
import { LuUser2 } from "react-icons/lu"
import { GrLanguage } from "react-icons/gr"
import { StyledNavBar } from "./styled/NavBar.styled"
import styled from "styled-components"

const NavBarImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`

export const NavBar = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <StyledNavBar>
      <ul>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
      <NavBarImage onClick={goToTop} src="museum-icon.png" />

      <Link to={"/user-page"}>
        <LuUser2 />
      </Link>
      <GrLanguage />
    </StyledNavBar>
  )
}

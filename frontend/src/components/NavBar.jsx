import { Link } from "react-router-dom"
import { LuUser2 } from "react-icons/lu"
import { GrLanguage } from "react-icons/gr"
// import { StyledNavBar } from "./styled/NavBar.styled"
import styled from "styled-components"

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
      <NavBarImage onClick={goToTop} src="icon4-white.png" />

      <Link to={"/user-page"}>
        <LuUser2 />
      </Link>
      <GrLanguage />
    </StyledNavBar>
  )
}

const NavBarImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  width: 130px;
`
const StyledNavBar = styled.nav`
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  top: 0;

  ul {
    display: flex;
    padding-left: 0;
    a {
      margin: 0 5px;
    }

    a:first-child {
      margin-left: 20px;
    }
  }

  a {
    margin-left: auto;
    display: flex;

    svg {
      margin-right: 10px;
    }
  }

  svg {
    margin-right: 20px;
  }
`

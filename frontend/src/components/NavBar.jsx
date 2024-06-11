import { Link } from "react-router-dom"
import { LuUser2 } from "react-icons/lu"
import styled from "styled-components"

export const NavBar = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <StyledNavBar>
      <NavSection>
        <NavSectionLeft>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/about"}>About</StyledLink>
        </NavSectionLeft>

        <NavBarImageContainer>
          <NavBarImage onClick={goToTop} src="icon4-white.png" />
        </NavBarImageContainer>

        <NavSectionRight>
          <StyledLink to={"/register"}>Register</StyledLink>
          <StyledLink to={"/login"}>Login</StyledLink>
          <StyledLink to={"/user-page"}>
            <LuUser2 />
          </StyledLink>
        </NavSectionRight>
      </NavSection>
    </StyledNavBar>
  )
}

const NavBarImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`
const NavBarImage = styled.img`
  height: 40px;
`
const StyledNavBar = styled.nav`
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 10px 20px;
  height: 60px;
`

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

const NavSectionRight = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 25px;
`

const NavSectionLeft = styled.div`
  display: flex;
  flex-grow: 1;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px;
  }
`

import { useState } from "react"
import logo from "../../assets/icons/logo.svg"
import mobileMenu from "../../assets/icons/mobileMenu.png"
import mobileMenuClose from "../../assets/icons/mobileMenuClose.png"
import { MobileMenu } from "./MobileMenu"
import { MainMenu } from "./MainMenu"
import { Breadcrumbs } from "./Breadcrumbs"
import styled from "styled-components"
import GlobalStyles from "../GlobalStyles"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-main);
  padding: 10px 20px;

  img {
    max-height: 50px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Align links to the right */
    flex-grow: 1; /* Allow nav to take up remaining space */

    & > div {
      display: flex;
      align-items: center;
    }

    img {
      cursor: pointer;
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    nav > div:first-of-type {
      display: none; /* Hide main menu on mobile */
    }
  }

  @media (min-width: 769px) {
    nav > div:last-of-type {
      display: none; /* Hide mobile menu icon on desktop */
    }
  }
`

export const Header = () => {
  const [active, setActive] = useState(false)

  //Function to handle mobile menu
  const handleMobileMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <header>
          <img src={logo} alt="Solar system logo" />
          <nav>
            <div>
              <MainMenu />
            </div>

            <div onClick={handleMobileMenu}>
              {!active ? (
                <img src={mobileMenu} alt="Mobile menu icon" />
              ) : (
                <>
                  <img src={mobileMenuClose} alt="Mobile menu close icon" />
                  <MobileMenu />
                </>
              )}
            </div>
          </nav>
          <Breadcrumbs />
        </header>
      </HeaderContainer>
    </>
  )
}

import { useState } from "react"
import logo from "../../assets/icons/logo.svg"
import mobileMenu from "../../assets/icons/mobileMenu.png"
import mobileMenuClose from "../../assets/icons/mobileMenuClose.png"
import { MobileMenu } from "./MobileMenu"
import { MainMenu } from "./MainMenu"

export const Header = () => {
  const [active, setActive] = useState(false)

  //Function to handle mobile menu
  const handleMobileMenu = () => {
    setActive(!active)
  }

  return (
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
    </header>
  )
}

import { NavLinks } from "./NavLinks"
import styled from "styled-components"

const MobileMenuContainer = styled.ul`
  display: flex;
  background-color: var(--background-color);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: var(--font-family-headlines);
    font-size: 20px;
    justify-content: flex-end;
  }
`
const MobileMenuItem = styled.li`
  margin: 10px 0;
`

export const MobileMenu = ({ handleMenuClick }) => {
  const mobileLinks = [
    { label: "_PLANETS", to: "/planets" },
    { label: "_MASS CONVERTER", to: "/massconverter" },
    { label: "_THE SUN", to: "/celestial/sun" },
    { label: "_THE MOON", to: "/celestial/moon" },
  ]

  return (
    <MobileMenuContainer>
      {mobileLinks.map((link, index) => (
        <MobileMenuItem key={`navlink-${index}`}>
          <NavLinks label={link.label} to={link.to} handleMenuClick={handleMenuClick} />
        </MobileMenuItem>
      ))}
    </MobileMenuContainer>
  )
}

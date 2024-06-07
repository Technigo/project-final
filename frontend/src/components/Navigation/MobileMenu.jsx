import { NavLinks } from "./NavLinks"
import styled from "styled-components"

const MobileMenuContainer = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileMenu = () => {
  const mobileLinks = [
    { label: "Planets", to: "/planets" },
    { label: "Calculator", to: "/calculator" },
    { label: "The Sun", to: "/sun" },
    { label: "The Moon", to: "/moon" },
  ]

  return (
    <MobileMenuContainer>
      {mobileLinks.map((link, index) => (
        <li key={`navlink-${index}`}>
          <NavLinks label={link.label} to={link.to} />
        </li>
      ))}
    </MobileMenuContainer>
  )
}

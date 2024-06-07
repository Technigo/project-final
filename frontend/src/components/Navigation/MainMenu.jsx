import GlobalStyles from "../GlobalStyles"
import { NavLinks } from "./NavLinks"
import styled from "styled-components"

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin-left: 40px;
  margin-right: 60px;
`

export const MainMenu = () => {
  const navLinks = [
    { label: "Planets", to: "/planets" },
    { label: "Mass Converter", to: "/massconverter" },
    { label: "The Sun", to: "/sun" },
    { label: "The Moon", to: "/moon" },
  ]

  return (
    <>
      <GlobalStyles />
      <Menu>
        {navLinks.map((link, index) => (
          <MenuItem key={`navlink-${index}`}>
            <NavLinks label={link.label} to={link.to} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

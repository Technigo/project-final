import { NavLinks } from "./NavLinks"

export const MainMenu = () => {
  const navLinks = [
    { label: "Planets", to: "/planets" },
    { label: "Calculator", to: "/calculator" },
    { label: "The Sun", to: "/sun" },
    { label: "The Moon", to: "/moon" },
  ]

  return (
    <ul>
      {navLinks.map((link, index) => (
        <li key={`navlink-${index}`}>
          <NavLinks label={link.label} to={link.to} />
        </li>
      ))}
    </ul>
  )
}

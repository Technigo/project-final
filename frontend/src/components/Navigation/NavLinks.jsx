import { NavLink } from "react-router-dom"

export const NavLinks = ({ label, to }) => {
  return <NavLink to={to}>{label}</NavLink>
}

import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { StyledButton } from "./styled/Button.styled"

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext)

  return (
    <Link to={"/"} onClick={logout}>
      <StyledButton aria-label="Log out">Log out</StyledButton>{" "}
    </Link>
  )
}

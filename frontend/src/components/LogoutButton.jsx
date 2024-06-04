import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import StyledButton from "./styled/Button.styled"


export const LogoutButton = () => {
  const { logout } = useContext(AuthContext)

  return (
    <Link to={"/"} onClick={logout} className="full-width">
      <StyledButton className="full-width">Log out</StyledButton>{" "}
    </Link>
  )
}

import { Link } from "react-router-dom"
import StyledFooter from "./styled/Footer.styled"

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <Link to={"/contact"}>Contact us</Link>
        <Link to={"/references"}>Licenses</Link>
      </ul>

      <p> © 2024 MuSeek. All rights reserved.</p>
    </StyledFooter>
  )
}

import { Link } from "react-router-dom"
import styled from "styled-components"

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

const StyledFooter = styled.footer`
  background-color: #222222;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-size: 10px;
  padding: 15px 0;

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;

    a {
      color: #f7f7f7;
      text-align: center;
      font-size: 18px;
      width: fit-content;
      margin: 0 auto;
    }
  }

  a {
    color: #f7f7f7;
  }

  p {
    color: #f7f7f7;
  }
`

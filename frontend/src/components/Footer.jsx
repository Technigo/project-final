import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <>
      <div>
        <ul>
          <Link to={"/about"}>About MuSeek</Link>
          <Link to={"/contact"}>Contact us</Link>
        </ul>
      </div>
      <div>
        <p> © 2024 MuSeek. All rights reserved.</p>
      </div>
    </>
  )
}

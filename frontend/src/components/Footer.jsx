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
        <a target="_blank" href="https://icons8.com/icon/65186/museum">
          Museum
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <p> © 2024 MuSeek. All rights reserved.</p>
      </div>
    </>
  )
}

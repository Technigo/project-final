import { Link } from "react-router-dom"
import { LuUser2 } from "react-icons/lu"
import { GrLanguage } from "react-icons/gr"

export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </ul>
        <LuUser2 />
        <GrLanguage />
      </nav>
    </>
  )
}

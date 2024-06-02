import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { StyledNavBar } from "./styled/NavBar.styled";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </ul>

      <Link to={"/user-page"}>
        <LuUser2 />
      </Link>
      <GrLanguage />
    </StyledNavBar>
  );
};

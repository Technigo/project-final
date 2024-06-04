import { Link } from "react-router-dom";
import StyledFooter from "./styled/Footer.styled";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <ul>
            <Link to={"/about"}>About MuSeek</Link>
            <Link to={"/contact"}>Contact us</Link>
          </ul>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/65186/museum">
            Museum icon by{" "}
          </a>

          <a target="_blank" href="https://icons8.com">
            {" "}
            Icons 8
          </a>
          <p> © 2024 MuSeek. All rights reserved.</p>
        </div>
      </StyledFooter>
    </>
  );
};

import { Avatar } from "../reusables/Avatar";
import { Logout } from "../pages/Logout";
import { Link } from "react-router-dom";
import logo from "../../src/assets/globe-logo.svg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  img {
    width: 44px;
    height: 44px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    width: 75px;
    height: 15px;
  }
  .typography {
    display: flex;
    flex-direction: column;
    gap: 2px;

    div {
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
      color: #000;
      font-family: "Open Sans";
      font-size: 13px;
      font-weight: 700;
      line-height: normal;
    }
  }
  .avatar {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  }
`;
const StyledLogo = styled.img`
  width: 70px;
`;
export const MobileHeader = ({ id }) => {
  const { username } = useContext(DashboardContext);
  return (
    <StyledHeader role="banner">
      <div className="avatar">
        <Avatar id={id} />
        <div className="typography">
          <Typography style={{ textTransform: "capitalize" }} variant="body1">
            {username}
          </Typography>
          <Logout />
        </div>
      </div>
      <Link to="/" aria-label="Home">
        <StyledLogo src={logo} alt="logo" />
      </Link>
    </StyledHeader>
  );
};

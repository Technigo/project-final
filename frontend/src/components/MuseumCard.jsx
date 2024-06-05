import { Link } from "react-router-dom";
import StyledCardMuseum from "./styled/MuseumCard.styled";
import { StyledImage } from "../pages/DetailPage";

export const MuseumCard = ({ museum }) => {
  return (
    <StyledCardMuseum src={museum.url} alt={`Image related to ${museum.name}`}>
      <Link to={`/${museum.id}`} key={museum.id}>
        <StyledImage />
        <div>{museum.name}</div>
        <div>{museum.theme}</div>
        <div>{museum.website}</div>
      </Link>
    </StyledCardMuseum>
  );
};

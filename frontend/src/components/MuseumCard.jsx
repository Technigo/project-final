import { Link } from "react-router-dom";
import StyledCardMuseum from "./styled/MuseumCard.styled";

export const MuseumCard = ({ museum }) => {
  return (
    <StyledCardMuseum>
      <Link to={`/${museum.id}`} key={museum.id}>
        <div>{museum.name}</div>
        <div>{museum.theme}</div>
        <div>{museum.website}</div>
      </Link>
    </StyledCardMuseum>
  );
};

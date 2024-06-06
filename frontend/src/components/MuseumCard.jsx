import { Link } from "react-router-dom";
import StyledMuseumCard from "./styled/MuseumCard.styled";
import styled from "styled-components";

const MuseumCardContent = styled.div`
  margin-left: 20px;

  h3 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;

export const MuseumCard = ({ museum }) => {
  return (
    <StyledMuseumCard>
      <Link to={`/${museum.id}`} key={museum.id}>
        <img src={museum.url} alt={`Image related to ${museum.name}`} />
        <MuseumCardContent>
          <h3>{museum.name}</h3>
          <p>{museum.theme}</p>
          <p>{museum.location}</p>
        </MuseumCardContent>
      </Link>
    </StyledMuseumCard>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";
import { getOptimizedUrl } from "../util/UrlUtil";
import { FavoriteButton } from "../components/FavoriteButton";

export const MuseumCard = ({ museum }) => {
  return (
    <StyledMuseumCard>
      <ImageContainer>
        <img
          src={getOptimizedUrl(museum.url, 650)}
          alt={`Image related to ${museum.name}`}
        />
      </ImageContainer>
      <MuseumCardContent>
        <FavoriteButton museumId={museum.id} inCard />
        <Link to={`/${museum.id}`} key={museum.id}>
          <h3>{museum.name}</h3>
          <p>{museum.theme}</p>
          <p>{museum.location}</p>
        </Link>
      </MuseumCardContent>
    </StyledMuseumCard>
  );
};

const MuseumCardContent = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;

  a {
    color: #f7f7f7;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }

  &:hover {
    a {
      color: #f7f7f7;
      cursor: pointer;
    }
  }
`;

const StyledMuseumCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: #2a2a28;
  color: #f7f7f7;
  transition: transform 0.3s;
  width: 100%;
  padding-top: 100%;
  height: 0;

  &:hover {
    transform: scale(1.05);

    img {
      filter: brightness(50%);
    }

    ${MuseumCardContent} {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease-in-out;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease-in-out;
  }
`;

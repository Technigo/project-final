import { Link } from "react-router-dom"
import styled from "styled-components"
//import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

//import StyledMuseumCard from "./styled/MuseumCard.styled"

export const MuseumCard = ({ museum }) => {
  return (
    <StyledMuseumCard>
      <Link to={`/${museum.id}`} key={museum.id}>
        <ImageContainer>
          <img src={museum.url} alt={`Image related to ${museum.name}`} />
        </ImageContainer>
        <MuseumCardContent>
          <h3>{museum.name}</h3>
          <p>{museum.theme}</p>
          <p>{museum.location}</p>
        </MuseumCardContent>
      </Link>
    </StyledMuseumCard>
  )
}

const MuseumCardContent = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;

  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`

const StyledMuseumCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: #2a2a28;
  color: #f7f7f7;
  transition: transform 0.3s;
  cursor: pointer;
  width: 100%;
  padding-top: 100%; /* Maintain square aspect ratio */
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
`
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
`
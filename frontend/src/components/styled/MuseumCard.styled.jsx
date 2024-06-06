import styled from "styled-components";

const StyledMuseumCard = styled.div`
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: rgba(34, 47, 62, 1);
  color: #f7f7f7;

  img {
    width: auto;
    height: 150px;
  }

  &:hover {
    a {
      color: #f7f7f7;
    }
  }
`;

export default StyledMuseumCard;

import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { IoRestaurantOutline } from "react-icons/io5";
import { ToHomepageBtn } from "../components/ToHomepageBtn";
import { FavoriteFunction } from "../components/FavoriteFunction";
import { CommentSection } from "../components/CommentSection";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import museumList from "../../../backend/data/museums.json";
import styled from "styled-components";
import StyledButton from "../components/styled/Button.styled";
import { getOptimizedUrl } from "../util/UrlUtil";

export const DetailPage = () => {
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  const params = useParams();
  const museumId = params.slug;
  const museum = museumList.find((museum) => museum.id === +museumId);

  if (!museum) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Container>
      <Background />
      <ContentContainer>
        <Content>
          <ImageContainer>
            <ToHomepageBtn />
            <StyledImage
              src={getOptimizedUrl(museum.url, 1200)}
              alt={`Image related to ${museum.name}`}
            />
          </ImageContainer>
          <TextContainer>
            <h3>{museum.name}</h3>
            <FavoriteFunction museumId={museum.id} />
            <p>{museum.location}</p>
            <Description>{museum.description} </Description>
            {museum.has_cafe ? (
              <CafeIconContainer>
                <IoRestaurantOutline />{" "}
              </CafeIconContainer>
            ) : (
              <p>This museum has no cafe or restaurant on its premises</p>
            )}
            <OpeningHours>
              <h4>Opening hours</h4>
              {museum.opening_hours.map((hours, index) => {
                const day = Object.keys(hours)[0];
                const time = hours[day];
                return (
                  <p key={index}>
                    {day}: {time}
                  </p>
                );
              })}
            </OpeningHours>

            <TicketPrice>Ticket price: {museum.ticket_price}</TicketPrice>
            <StyledButton>Buy a ticket</StyledButton>
            <VisitWebsite>
              Visit the official website{" "}
              <a
                href={museum.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </VisitWebsite>
          </TextContainer>
        </Content>

        <CommentContainer>
          <h4>
            Have you been here? Share your experience with our friendly
            community!
          </h4>

          {isAuthenticated ? (
            <>
              <CommentSection museumId={museumId} />
            </>
          ) : (
            <p>
              <Link to={"/login"}>Log in</Link> to leave a review or read what
              visitors liked about this museum.
            </p>
          )}
        </CommentContainer>
      </ContentContainer>
    </Container>
  );
};

//Styled components

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #232222;
  z-index: -1;
`;

const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 40%;
    height: 80vh;
    margin-bottom: 0;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h3{
    font-size: 36px;

  }
`;

const Description = styled.p`
  margin-bottom: 5px;
`;

const CafeIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  svg {
    margin-right: 8px;
  }
`;

const OpeningHours = styled.div`
  margin-bottom: 5px;

  h4 {
    margin-bottom: 5px;
  }
`;
const TicketPrice = styled.p`
  margin-bottom: 5px;
`;

const VisitWebsite = styled.p`
  margin-bottom: 5px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const CommentContainer = styled.div`
  padding: 20px;

   @media (min-width: 1024px) {
    width: 40%;
`;

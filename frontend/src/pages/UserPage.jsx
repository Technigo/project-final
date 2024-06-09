import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { LogoutButton } from "../components/LogoutButton";
import { ToHomepageBtn } from "../components/ToHomepageBtn";
import LikedMuseums from "../components/LikedMuseums";

//features that should be displayed here: liked museums, written comments, purchased tickets...

//Authorize with access token from /user-page

export const UserPage = () => {
  const { authState, logout } = useContext(AuthContext);
  const { isAuthenticated, accessToken } = authState;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPage = async () => {
      try {
        const response = await fetch("http://localhost:3000/user-page", {
          headers: {
            Authorization: accessToken,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user page");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        logout();
      }
    };

    if (isAuthenticated) {
      fetchUserPage();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, accessToken, logout]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (!isAuthenticated) {
    return (
      <UserContainer>
        <p>You are not authorized to view this page. Please log in.</p>
        <ToHomepageBtn />
        <AuthLink to={"/login"}>Log in </AuthLink> or
        <AuthLink to={"/register"}> sign up</AuthLink>
      </UserContainer>
    );
  }

  return (
    <div>
      <ToHomepageBtn />

      <UserContainer>
        <ToHomepageBtn />
        <WelcomeMessage>Welcome to your personal page, </WelcomeMessage>
        <FeatureList>
          <LikedMuseums />
          <FeatureItem>Posted reviews</FeatureItem>
          <FeatureItem>Purchased tickets</FeatureItem>
        </FeatureList>
        <LogoutButton />
      </UserContainer>
    </div>
  );
};

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WelcomeMessage = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  width: 50%;
`;

const FeatureItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #666;
`;

const AuthLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 5px;
`;

const Loading = styled.div`
  color: #333;
  font-size: 1.2em;
`;
